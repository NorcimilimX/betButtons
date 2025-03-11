<template>
  <div class="auth-container">
    <h2>{{ isRegister ? 'Register Bar' : 'Sign in' }}</h2>
    <form @submit.prevent="handleSubmit">
      <input v-if="isRegister" v-model="name" type="text" placeholder="Name/nick/else?" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">{{ isRegister ? 'Register' : 'Sign in' }}</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button @click="toggleForm">{{ isRegister ? 'Already have an account? Then sign in' : 'No account? Register' }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const { register, login, errorMessage } = authStore

const isRegister = ref(true)
const name = ref('')
const email = ref('')
const password = ref('')

const toggleForm = () => isRegister.value = !isRegister.value

const handleSubmit = async () => {
  if (isRegister.value) {
    await register(name.value, email.value, password.value)
  } else {
    await login(email.value, password.value)
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

input {
  width: 100%; /* Робимо так, щоб інпут займав всю ширину контейнера */
  box-sizing: border-box; /* Враховуємо padding та border у розрахунку ширини */
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background: linear-gradient(135deg, violet, orange);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}
.error {
  color: red;
}
</style>