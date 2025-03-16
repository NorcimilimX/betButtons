<template>
  <AuthForm v-if="!authStore.user" />
  <div v-else class="main-container">
    <RulesModal />
    <CommandMonitor />
    <GridButtons />
    <BurgerMenu />
  </div>
</template>

<script setup lang="ts">
import AuthForm from '@/components/AuthForm.vue'
import GridButtons from '@/components/GridButtons.vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
import CommandMonitor from "@/components/CommandMonitor.vue"
import RulesModal from "@/components/RulesModal.vue";

import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
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