import type DiceBox from '@3d-dice/dice-box'
import type { DieResultObject } from '@3d-dice/dice-box'

import { tryFoldDiceExpression, DiceRollerWithDiceBox } from '@/wasm/oxidice/pkg/oxidice'
import type { DiceBoxResponse, OutputNode } from '@/wasm/oxidice/pkg/oxidice'

const colorCycler = {
  // rainbow colors
  palette: ['#FF3B30', '#FF9500', '#FFCC00', '#4CD964', '#007AFF', '#5856D6', '#AF52DE'],

  _currentIndex: 0,

  next: function () {
    const color = this.palette[this._currentIndex]
    this._currentIndex = (this._currentIndex + 1) % this.palette.length
    return color
  },

  reset: function () {
    this._currentIndex = 0
  },
}

// One DiceBox instance for the entire app
let diceBoxInstance: null | DiceBox = null
let isInitializing = false // lock to prevent concurrent initializations
let isReady = false // indicates whether DiceBox is ready

let cancelPreviousRoll: (() => void) | null = null
let rollToken: object | null = null // used to identify the current roll task

export function useDiceBox() {
  const initDiceBox = async (containerId: string) => {
    if (diceBoxInstance || isInitializing) return
    isInitializing = true

    const { default: DiceBox } = await import('@3d-dice/dice-box')

    diceBoxInstance = new DiceBox({
      container: containerId,
      id: 'dice-canvas',
      assetPath: '/assets/',
      scale: 5,
      theme: 'default',
      origin: window.location.origin + import.meta.env.BASE_URL,
    })

    try {
      await diceBoxInstance.init()
      isReady = true
    } finally {
      isInitializing = false
    }
  }

  const getDiceBox = () => {
    if (!diceBoxInstance || !isReady) {
      throw new Error('DiceBox is not initialized. Please call initDiceBox first.')
    }
    return diceBoxInstance
  }

  const diceBoxFunction = (functionName: 'add' | 'roll') => {
    return async (
      ...args: Parameters<DiceBox['roll']>
    ): Promise<Array<DieResultObject> | undefined> => {
      const box = getDiceBox()

      // if there is a previous roll in progress, cancel it
      if (cancelPreviousRoll) {
        cancelPreviousRoll()
        cancelPreviousRoll = null
      }

      // Promise that rejects after timeout
      let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined
      const timeoutPromise = new Promise<never>((_, reject) => {
        timeoutId = setTimeout(() => {
          reject(new Error('Roll timeout'))
        }, 100 * 1000) // 100 seconds timeout
      })

      // Promise that rejects when cancelled
      let cancelThisRun: (() => void) | undefined
      const cancelPromise = new Promise<never>((_, reject) => {
        cancelThisRun = () => reject(new Error('Cancelled by new roll'))
      })
      if (cancelThisRun) {
        cancelPreviousRoll = cancelThisRun
      }

      try {
        let results: Array<DieResultObject> = []
        if (functionName === 'roll') {
          results = await Promise.race([box.roll(...args), timeoutPromise, cancelPromise])
        } else if (functionName === 'add') {
          results = await Promise.race([box.add(...args), timeoutPromise, cancelPromise])
        }
        clearTimeout(timeoutId) // clear timeout on success
        // clear the cancel function
        if (cancelPreviousRoll === cancelThisRun) {
          cancelPreviousRoll = null
        }
        return results
      } catch (error) {
        clearTimeout(timeoutId)
        // clear the cancel function
        if (cancelPreviousRoll === cancelThisRun) {
          cancelPreviousRoll = null
        }

        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        const isCancelled = errorMessage === 'Cancelled by new roll'
        if (!isCancelled) {
          // clear the dice box only if not cancelled
          getDiceBox().clear()
        }
        return undefined
      }
    }
  }
  const diceBoxRoll = diceBoxFunction('roll')
  const diceBoxAdd = diceBoxFunction('add')

  const rollWithAnimation = async (
    notation: string,
    recursion_limit: number,
    dice_count_limit: number,
  ): Promise<OutputNode | null> => {
    const myToken = {} // Create a unique token for this roll
    rollToken = myToken // Set the global rollToken to this token
    const box = getDiceBox()
    box.clear() // Clear previous dice
    let diceRoller: DiceRollerWithDiceBox | null = null

    try {
      let first_flag = true
      diceRoller = new DiceRollerWithDiceBox(notation, recursion_limit, dice_count_limit)
      while (true) {
        // 1. Check if the token is still valid
        if (rollToken !== myToken) return null
        // 2. Evaluate
        diceRoller.evaluation()
        // 3. Handle removal requests
        for (const id of diceRoller.removeRequests()) {
          getDiceBox().remove(id)
        }
        // 4. Check for final results
        const finalResult = diceRoller.tryGetResults()
        if (finalResult) {
          return finalResult
        }
        // 5. Get requests
        const request = diceRoller.getRequests()
        // 6. Handle requests
        if (request.length !== 0) {
          const notation = request.map((req) => {
            return {
              qty: req.count,
              sides: req.face,
              themeColor: colorCycler.next(),
            }
          })
          const callF = first_flag ? diceBoxRoll : diceBoxAdd
          first_flag = false
          // Check token again before the async call
          if (rollToken !== myToken) return null
          const dieResults = await callF(notation)
          if (dieResults === undefined) return null

          // Group die results by groupId
          const groupedDieResults: DieResultObject[][] = []
          let currentGroupIdx = undefined
          for (const dieResult of dieResults) {
            if (dieResult.groupId !== currentGroupIdx) {
              currentGroupIdx = dieResult.groupId
              groupedDieResults.push([])
            }
            groupedDieResults[groupedDieResults.length - 1]?.push(dieResult)
          }
          // Prepare responses
          const responses: DiceBoxResponse[] = []
          for (let i = 0; i < request.length; i++) {
            const idx = request[i]?.idx
            const dieResult = groupedDieResults[i]
            if (idx === undefined || dieResult === undefined) {
              return null
            }
            const values = dieResult.map((d) => d.value)
            const results = dieResult.map((d) => {
              return {
                groupId: d.groupId,
                rollId: d.rollId,
              }
            })
            responses.push({
              idx: idx,
              results: results,
              values: values,
            })
          }
          // Set responses
          diceRoller.setResponses(responses)
        } else {
          diceRoller.setResponses([]) // No requests, set empty responses
        }
      }
    } finally {
      // IMPORTANT: free the wasm memory
      diceRoller?.free()
    }
  }

  const parseAndRoll = async (notation: string): Promise<OutputNode | null> => {
    try {
      return await rollWithAnimation(notation, 20, 2000)
    } catch (e) {
      alert(e as string)
      return null
    }
  }

  const checkNotationValidAndFold = (notation: string): [boolean, string] => {
    // if valid, second return value is the folded expression
    // if invalid, second return value is the error message
    try {
      const evalResult = tryFoldDiceExpression(notation)
      if (evalResult.result === 'valid') {
        return [true, evalResult.value]
      } else {
        return [false, evalResult.value] // 错误信息
      }
    } catch (e) {
      let errorMessage: string
      if (e instanceof Error) {
        errorMessage = e.message
      } else if (typeof e === 'string') {
        errorMessage = e
      } else {
        errorMessage = String(e) || 'Unknown error'
      }
      return [false, errorMessage]
    }
  }

  // 暴露给组件使用的属性和方法
  return {
    initDiceBox,
    getDiceBox,
    parseAndRoll,
    checkNotationValidAndFold,
  }
}
