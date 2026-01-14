declare module '@3d-dice/dice-box' {
  export interface RollObject {
    modifier?: number // optional - the modifier (positive or negative) to be added to the final results
    qty?: number // optional - the number of dice to be rolled. Defaults to 1
    sides: mixed // the type of die to be rolled. Either a number such as 20 or a die type such as "fate".
    theme?: string // optional - the theme's 'systemName' for this roll
    themeColor?: string // optional - HEX value for the theme's material color
  }

  export interface DieResultObject {
    groupId: number // the roll group this die belongs to
    rollId: number // the unique identifier for this die within the group
    sides: number // the type of die
    theme: string // the theme that was assigned to this die
    themeColor: string // optional - HEX value for the theme's material color
    value: number // the result for this die
  }

  export interface RollResultObject {
    // the roll group object
    id: number // the id of this group - should match the groupId of rolls
    mods: [] // the roll modifier
    qty: number // the number of dice in this roll
    rolls: Array<DieResultObject> // the individual die results for this roll
    sides: number // the type of die used
    theme: string // the theme for this group of dice
    themeColor: string // the theme color for this group of dice
    value: number // the sum of the dice roll results and modifier
  }

  export interface DiceBoxOptions {
    id?: string
    assetPath?: string
    container?: string
    gravity?: number
    mass?: number
    friction?: number
    restitution?: number
    angularDamping?: number
    linearDamping?: number
    spinForce?: number
    throwForce?: number
    startingHeight?: number
    settleTimeout?: number
    offscreen?: boolean
    delay?: number
    lightIntensity?: number
    enableShadows?: boolean
    shadowTransparency?: number
    theme?: string
    preloadThemes?: Array<string>
    externalThemes?: object
    themeColor?: string
    scale?: number
    suspendSimulation?: boolean
    origin?: string
  }

  export default class DiceBox {
    constructor(options: DiceBoxOptions)

    init(): Promise<void>

    roll(
      notation: string | RollObject | Array<string | RollObject>,
      options?: {
        theme: string
        newStartPoint: boolean
      },
    ): Promise<Array<DieResultObject>>

    add(
      notation: string | RollObject | Array<string | RollObject>,
      options?: {
        theme: string
        newStartPoint: boolean
      },
    ): Promise<Array<DieResultObject>>

    reroll(
      notation: { groupId: number; rollId: number } | Array<{ groupId: number; rollId: number }>,
      options?: { remove: boolean; newStartPoint: boolean },
    ): Promise<Array<DieResultObject>>

    remove(
      notation: { groupId: number; rollId: number } | Array<{ groupId: number; rollId: number }>,
    ): Promise<Array<DieResultObject>>

    clear(): void

    hide(className?: string): void

    show(className?: string): void

    updateConfig(options: DiceBoxOptions): void

    getRollResults(): Array<RollResultObject>
  }
}
