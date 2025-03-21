<template>
  <div class="menu-container" @click="toggleMenu" :class="{ expanded: isExpanded }">
    <div v-if="!isExpanded" class="burger-icon">☰</div>
    <div v-else class="menu-content">
      <span>Hi bet picker, {{ authStore.userName }}</span>
      <button @click.stop="authStore.logout">Log out</button>
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
  width: 250px;
  height: 135px;
  border-radius: 12px;
  justify-content: space-around;
}

.burger-icon {
  font-size: 32px;
}

.menu-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;

  span, button {
    font-size: 22px;
  }

  button {
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 5px 10px;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      border: 1px solid #FFA500FF;
      color: #EE82EEFF;
    }
  }
}
</style>