<template>
  <div class="container">
    <button
        v-for="(emoji, index) in emojis"
        :key="index"
        class="button"
        :class="{'selected': selectedIndex === index}"
        @click="handleClick(index, emoji)"
    >
      Bet {{ emoji }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLogStore } from '@/stores/logStore'

const emojis = ref(["🎭", "🔮", "🌟", "💎️", "♦️", "🧿", "🔸", "🔳", "🪬"])
const logStore = useLogStore()
const { logClick } = logStore

const selectedIndex = ref<number | null>(null)

const handleClick = (index: number, emoji: string) => {
  selectedIndex.value = index
  logClick(index, emoji)
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 1200px;
  margin: auto;
  width: calc(100vw - 20px);
  height: calc(100vh - 200px);
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(16px, 5vw, 32px);
  border: 2px solid black;
  border-radius: 12px;
  background-color: white;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
  text-transform: uppercase;
}
.button:hover {
  background: linear-gradient(135deg, violet, orange);
  border-color: transparent;
  color: white;
  outline: none;
}

.selected {
  background: linear-gradient(135deg, violet, orange);
  color: white;
  outline: none;
  border: transparent;
}
</style>