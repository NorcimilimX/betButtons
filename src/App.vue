<template>
  <AuthForm v-if="!authStore.user" />
  <div v-else class="main-container">
    <WinLoseAnimation v-if="gameStore.isOverlayVisible" />
    <RulesModal />
    <CommandMonitor />
    <BetButtons />
    <BurgerMenu />
  </div>
</template>

<script setup lang="ts">
import AuthForm from '@/components/AuthForm.vue'
import BetButtons from '@/components/BetButtons.vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
import CommandMonitor from "@/components/CommandMonitor.vue"
import RulesModal from "@/components/RulesModal.vue"
import WinLoseAnimation from "@/components/WinLoseAnimation.vue"

import { useAuthStore } from '@/stores/authStore'
import { useGameStore} from "@/stores/gameStore"

const authStore = useAuthStore()
const gameStore = useGameStore()
</script>

<style>
.main-container {
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
  margin: 10px auto;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>