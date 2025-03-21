<template>
  <div>
    <div class="monitor">{{ logMessages.join('\n') }}</div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLogStore } from '@/stores/logStore'

const logStore = useLogStore()
const { logMessages } = storeToRefs(logStore)
</script>
<style scoped>
.monitor {
  width: 100%;
  overflow: hidden;
  height: 150px;
  background-color: black;
  color: #5cb75c;
  font-family: monospace;
  padding: 10px;
  overflow-y: auto;
  border-radius: 12px;
  margin-bottom: 10px;
  white-space: pre-wrap;
  box-sizing: border-box;
}
</style>