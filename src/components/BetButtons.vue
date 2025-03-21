<template>
  <div class="container">
    <button
        v-for="(emoji, index) in gameStore.betButtonEmojis"
        :key="index"
        class="button"
        :class="{
        'selected': gameStore.selectedIndex === index,
        'winning': gameStore.winningIndex === index,
        'disabled': gameStore.selectedIndex !== null
      }"
        @click="gameStore.placeBet(index, emoji)"
        :disabled="gameStore.selectedIndex !== null"
    >
      Bet {{ emoji }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore';
const gameStore = useGameStore();
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
  border: transparent;
}
.winning {
  background: linear-gradient(45deg, #5cb75c, violet);
  border: 3px solid black;
  color: white;
}
.disabled {
  cursor: not-allowed;
}
</style>
