<template>
  <div v-if="gameStore.isOverlayVisible" class="overlay">
    <div class="emoji-container">
      <span
          v-for="(emoji, index) in gameStore.selectedEmojis"
          :key="index"
          class="emoji"
          :style="getRandomPosition()"
      >
        {{ emoji }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore'

const gameStore = useGameStore()

const getRandomPosition = () => {
  return {
    left: `${Math.random() * 100}vw`,
    animationDelay: `${Math.random() * 3}s`
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1000;
}

.emoji-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.emoji {
  font-size: 50px;
  position: absolute;
  top: -10%;
  animation: fallLoop 3s linear infinite;
}

@keyframes fallLoop {
  from {
    transform: translateY(-10vh);
    opacity: 1;
  }
  to {
    transform: translateY(110vh);
    opacity: 1;
  }
}
</style>
