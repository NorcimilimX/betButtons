<template>
  <div class="menu-container" @click="toggleMenu" :class="{ expanded: isExpanded }">
    <div v-if="!isExpanded" class="burger-icon">☰</div>
    <div v-else class="menu-content">
      <button @click.stop="authStore.logout">Вийти</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const isExpanded = ref(false)

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.menu-container {
  position: fixed;
  top: 15px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #5cb75c, #000);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-container.expanded {
  top: 15px;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  justify-content: space-around;
}

.burger-icon {
  font-size: 32px;
}

.menu-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

button {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>