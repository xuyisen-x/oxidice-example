<script setup lang="ts">
import { onMounted, watch, ref, computed } from 'vue'
import { useDiceBox } from '@/composables/useDiceBox'
import type { OutputNode, ValueSummary } from './wasm/oxidice/pkg/oxidice'
import { useDiceResultStore } from './composables/useDiceResultStore'
import ExpressionNode from './components/ExpressionNode.vue'
import DiceValueDisplay from './components/DiceValueDisplay.vue'

const { showedValue, setResults, getResult, clear } = useDiceResultStore()
const { initDiceBox, parseAndRoll, checkNotationValidAndFold } = useDiceBox()

const isReady = ref(false)
onMounted(async () => {
  try {
    await initDiceBox('#dice-box-container')
    isReady.value = true
  } catch (error) {
    alert('Dice box initialization failed' + error)
  }
})

const notation = ref('[4d6kh3] ** 6')
const isValidNotation = ref(true)
const foldedNotationOrErrorMessage = ref('---')
const definedResult = computed(() => getResult() as OutputNode)
const showedValueComputed = computed(() => {
  const res = getResult()
  if (res) {
    if (showedValue.value) {
      return showedValue.value
    } else {
      return res.value
    }
  }
  return undefined
})
const definedShowedValue = computed(() => showedValueComputed.value as ValueSummary)

// Simulating the folding logic
watch(
  notation,
  (newVal) => {
    if (newVal.trim() === '') {
      isValidNotation.value = true
      foldedNotationOrErrorMessage.value = '---'
      return
    }
    const [isValid, foldedOrError] = checkNotationValidAndFold(newVal)
    isValidNotation.value = isValid
    foldedNotationOrErrorMessage.value = foldedOrError
  },
  { immediate: true },
)

const onRoll = async () => {
  clear()
  const result = await parseAndRoll(notation.value)
  if (result) {
    setResults(result)
  }
}

const getResultString = (value: ValueSummary): string => {
  if (value.type === 'number') {
    return value.value.toString()
  } else if (value.type === 'dicePool') {
    return value.value.total.toString()
  } else if (value.type === 'successPool') {
    return value.value.count.toString()
  } else if (value.type === 'list') {
    return '[' + value.value.map((v) => v.toString()).join(', ') + ']'
  } else {
    return ''
  }
}
</script>

<template>
  <div v-if="!isReady" class="loading-overlay">
    <div class="loading-content">
      <p>Initializing...</p>
    </div>
  </div>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="control-section">
        <label class="label">Dice Notation</label>
        <input v-model="notation" type="text" placeholder="e.g. 2d6 + 4" class="dnd-input" />
      </div>

      <div class="control-section">
        <label class="label" :class="{ warning: !isValidNotation }">{{
          isValidNotation ? 'Folded Notation' : 'Error Message'
        }}</label>
        <div class="info-display" :class="{ warning: !isValidNotation }">
          {{ foldedNotationOrErrorMessage }}
        </div>
      </div>

      <div class="control-section">
        <button @click="onRoll" class="dnd-btn">Roll Dice</button>
      </div>

      <div class="divider"></div>

      <div v-if="getResult() !== undefined">
        <label class="label">Output Nodes</label>
        <div class="info-display">
          <ExpressionNode :node="definedResult" />
        </div>
      </div>

      <div v-if="getResult() !== undefined">
        <label class="label">Node Value</label>
        <DiceValueDisplay :value="definedShowedValue" />
      </div>

      <div v-if="getResult() !== undefined">
        <label class="label">Result</label>
        <div class="info-display">
          {{ getResultString(definedResult.value) }}
        </div>
      </div>
    </aside>

    <main class="main-content">
      <div id="dice-box-container"></div>

      <div class="watermark">Dice Scene</div>
    </main>
  </div>
</template>

<style>
:root {
  /* --- Light Mode Palette --- */
  --dnd-parchment-bg: #f0e6d2;
  --dnd-parchment-card: #e6d8b8;
  --dnd-ink-primary: #2b2118;
  --dnd-ink-secondary: #75604e;
  /* --- Dark Mode Palette --- */
  --dnd-dungeon-bg: #1a1b20;
  --dnd-dungeon-card: #25262e;
  --dnd-mithral-text: #e0e0e0;
  --dnd-stone-text: #a0a0b0;
  /* --- Accents --- */
  --dnd-dragon-red: #8a1c1c;
  --dnd-dragon-red-trans: #8a1c1c87;
  --dnd-dragon-red-hover: #a622229c;
  --dnd-gold: #c5a059;
  --dnd-gold-dim: rgba(197, 160, 89, 0.2);
  --dnd-magic-blue: #5b8bd1;
  --dnd-magic-blue-trans: #5b8ad187;
}

:root {
  --color-background: var(--dnd-parchment-bg);
  --color-background-soft: var(--dnd-parchment-card);
  --color-background-mute: var(--dnd-parchment-card);
  --color-border: #d4c5a3;
  --color-border-hover: var(--dnd-gold);
  --color-heading: var(--dnd-ink-primary);
  --color-text: var(--dnd-ink-primary);
  --color-text-soft: var(--dnd-ink-secondary);
  --color-primary: var(--dnd-dragon-red);
  --color-primary-hover: var(--dnd-dragon-red-hover);
  --color-accent: var(--dnd-gold);
  --section-gap: 160px;
}

/* Global Reset to ensure full screen usage */
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevents window scrolling */
}

#dice-box-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  pointer-events: none;
  background-color: transparent;
}

#dice-box-container canvas {
  pointer-events: none;
  display: block;
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
/* --- CSS Variables Definition --- */
:root {
  /* Light Mode Palette (Parchment) */
  --dnd-parchment-bg: #f0e6d2;
  --dnd-parchment-card: #e6d8b8;
  --dnd-ink-primary: #2b2118;
  --dnd-ink-secondary: #75604e;

  /* Accents */
  --dnd-dragon-red: #8a1c1c;
  --dnd-dragon-red-hover: #a62222;
  --dnd-gold: #c5a059;

  /* Mapped Variables */
  --bg-app: var(--dnd-parchment-bg); /* Main background */
  --bg-sidebar: var(--dnd-parchment-card); /* Sidebar background */
  --text-main: var(--dnd-ink-primary);
  --text-sub: var(--dnd-ink-secondary);
  --border-color: #d4c5a3;
  --accent-color: var(--dnd-dragon-red);
}

/* --- Layout Architecture --- */

.app-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-app); /* Parchment color for the whole app */
  font-family: 'Georgia', 'Times New Roman', serif; /* Serif fits the theme */
  color: var(--text-main);
}

/* Sidebar Styling */
.sidebar {
  width: 500px; /* Fixed Width */
  flex-shrink: 0; /* Prevent shrinking */
  background-color: var(--bg-sidebar);
  border-right: 2px solid var(--dnd-gold); /* Golden border separation */
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  gap: 16px;
  overflow-y: auto; /* Internal scroll only if content is too tall */
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
}

/* Main Content Styling */
.main-content {
  flex-grow: 1; /* Fills remaining space */
  position: relative;
  background-color: var(--dnd-parchment-bg); /* Use parchment here too */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Optional: Inner shadow to make it look like a recessed tray */
  box-shadow: inset 5px 0 15px rgba(0, 0, 0, 0.05);
}

/* --- UI Components --- */

/* Labels */
.label {
  display: block;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--text-sub);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.label.warning {
  color: var(--dnd-dragon-red);
}

/* Inputs */
.dnd-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-main);
  outline: none;
  transition: border-color 0.2s;
  overflow-x: auto;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 64px;
}

.dnd-input:focus {
  border-color: var(--accent-color);
  background-color: rgba(255, 255, 255, 0.8);
}

/* Read-only Display Boxes */
.info-display {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  min-height: 24px;
  font-family: monospace;
  display: flex;
  align-items: center;
  min-height: 44px;
  height: auto;
  word-break: break-all;
  white-space: normal;
  line-height: 1.4;
}

.info-display.warning {
  border: 2px solid var(--dnd-dragon-red);
}

/* Action Button */
.dnd-btn {
  width: 100%;
  padding: 12px;
  background-color: var(--dnd-dragon-red);
  color: #fff;
  border: 2px solid #5e1111;
  border-radius: 4px;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.2s,
    transform 0.1s;
}

.dnd-btn:hover {
  background-color: var(--dnd-dragon-red-hover);
}

.dnd-btn:active {
  transform: translateY(1px);
  box-shadow: none;
}

/* Placeholders (The blank divs with height) */
.placeholder-box {
  height: 120px; /* Fixed height */
  background-color: rgba(0, 0, 0, 0.02);
  border: 2px dashed var(--border-color);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.muted-text {
  color: var(--text-sub);
  opacity: 0.5;
  font-style: italic;
}

/* Divider */
.divider {
  height: 2px;
  background-color: var(--border-color);
  margin: 5px 0;
  opacity: 0.5;
}

/* Utility to push items to bottom of sidebar */
.mt-auto {
  margin-top: auto;
}

/* Canvas Setup */
.webgl-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.watermark {
  position: absolute;
  font-size: 3rem;
  font-weight: bold;
  color: var(--dnd-ink-secondary);
  opacity: 0.1;
  pointer-events: none;
  user-select: none;
}

.loading-overlay {
  position: absolute; /* 或者 fixed，视你的布局需求而定 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--dnd-parchment-bg); /* 使用羊皮纸背景 */
  z-index: 10000; /* 确保在最上层 */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loading-content {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: var(--dnd-ink-secondary);
}
</style>
