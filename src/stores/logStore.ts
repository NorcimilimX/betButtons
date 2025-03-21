import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLogStore = defineStore('log', () => {
    const permanentLog = 'terminal@output>>> Here you go. Please guess which button gonna win to make a bet. <<<'
    const logMessages = ref<string[]>([`${permanentLog}`])
    const addLog = (message: string) => {
        logMessages.value.push(`terminal@output>>> [${new Date().toLocaleTimeString()}] ${message} <<<`);
    };
    return { logMessages, addLog, permanentLog}
})