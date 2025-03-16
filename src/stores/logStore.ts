import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLogStore = defineStore('log', () => {
    const logMessages = ref<string[]>(['terminal@output>>> Here you go. Please guess which button gonna win to make a bet. <<<'])
    const logClick = (index: number, emoji: string) => {
        const message = `terminal@output>>> Your choice is: ${index + 1} - Bet ${emoji} <<<`
        logMessages.value.push(message)
        if (logMessages.value.length > 10) logMessages.value.shift()
    }

    return { logMessages, logClick, logRulesMessage }
})