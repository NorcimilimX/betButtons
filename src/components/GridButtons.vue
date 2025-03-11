<template>
  <div class="container">
    <button v-for="(emoji, index) in emojis" :key="index" class="button" @click="logClick(index, emoji)">
      Bet {{ emoji }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLogStore } from '@/stores/logStore'

const emojis = ref(["🧬", "🔮", "🌟", "💎️", "♦️", "🧿", "🔸", "🔳", "🪬"])
const logStore = useLogStore()
const { logClick } = logStore
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
}
.button:hover, .button:focus {
  background: linear-gradient(135deg, violet, orange);
  border-color: transparent;
  color: white;
  outline: none;
}
</style>