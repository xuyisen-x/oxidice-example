import { ref } from 'vue'
import type { OutputNode, ValueSummary } from '@/wasm/oxidice/pkg/oxidice'

const results = ref<OutputNode | undefined>(undefined)
const showedValue = ref<ValueSummary | undefined>(undefined)
const showedID = ref<number | undefined>(undefined)

export function useDiceResultStore() {
  const setResults = (node: OutputNode) => {
    results.value = node
    showedValue.value = undefined
    showedID.value = undefined
  }

  const setShowedValue = (value: ValueSummary, nodeId: number) => {
    if (results.value) {
      showedValue.value = value
      showedID.value = nodeId
    }
  }

  const removeShowedValue = () => {
    showedValue.value = undefined
    showedID.value = undefined
  }

  const getShowedId = (): number | undefined => {
    if (results.value && showedID.value) {
      return showedID.value
    }
    return undefined
  }

  const getResult = (): OutputNode | undefined => {
    return results.value
  }

  const clear = (): void => {
    results.value = undefined
    showedValue.value = undefined
    showedID.value = undefined
  }

  return {
    results,
    showedValue,
    showedID,
    setResults,
    setShowedValue,
    removeShowedValue,
    getShowedId,
    getResult,
    clear,
  }
}
