<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <div class="monitor">
        <p class="log-text">
          {{ displayedText }}
          <span v-if="isTyping || isCursorVisible" class="cursor"></span>
        </p>
      </div>
      <button class="confirm-button" @click="closeModal">Got it 🫡</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(true);
const logRulesMessage = ref(
    'terminal@output>>> The rules are pretty simple. You have a few bet buttons, and you need to choose which one will win. After you click a button, it gets highlighted with a violet-orange gradient. When you\'re done, the app randomly selects a bet that will win. If both picks match, you\'re a winner; otherwise, keep trying until you succeed 😉'
);
const displayedText = ref('');
const isTyping = ref(true);
const isCursorVisible = ref(true);

const typeText = () => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < logRulesMessage.value.length) {
      displayedText.value += logRulesMessage.value[index];
      index++;
    } else {
      clearInterval(interval);
      isTyping.value = false; // Друк завершено
    }
  }, 15);

  // Блимання курсора після завершення друку
  setInterval(() => {
    if (!isTyping.value) {
      isCursorVisible.value = !isCursorVisible.value;
    }
  }, 500);
};

const closeModal = () => {
  isVisible.value = false;
};

onMounted(() => {
  typeText();
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #222;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 600px;
  width: 90%;
}

.monitor {
  background: black;
  color: #5cb75c;
  font-family: monospace;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  min-height: 200px;
  display: flex;
  align-items: flex-start;
}

.log-text {
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
  display: inline;
  line-height: 25px;
  text-align: left;
}

.cursor {
  display: inline-block;
  width: 8px;
  height: 16px;
  background: #5cb75c;
  margin-left: 2px;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  from, to { background: transparent; }
  50% { background: #5cb75c; }
}

.confirm-button {
  background: linear-gradient(45deg, #32CD32, #FFD700);
  color: black;
  font-size: 32px;
  font-weight: bolder;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  transition: background 0.3s;
  text-transform: uppercase;
}

.confirm-button:hover {
  background: linear-gradient(45deg, #228B22, #FFC107);
}
</style>