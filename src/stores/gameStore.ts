import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useLogStore } from '@/stores/logStore'

export const useGameStore = defineStore('game', () => {
    const betButtonEmojis = ref(["🎭", "🔮", "🌟", "💎️", "♦️", "🧿", "🔸", "🔳", "🪬"])

    const selectedIndex = ref<number | null>(null)
    const winningIndex = ref<number | null>(null)
    const isGameActive = ref(true)
    const isOverlayVisible = ref(false)
    const overlayType = ref<'win' | 'lose' | null>(null)
    const selectedEmojis = ref<string[]>([])

    const logStore = useLogStore()

    const placeBet = (index: number, emoji: string) => {
        if (!isGameActive.value) return
        selectedIndex.value = index
        logStore.addLog(`Bet accepted: bet ${index + 1 + " " + emoji}`)
        startRandomSelection()
    }

    const startRandomSelection = () => {
        logStore.addLog("Defining the winning bet...")
        isGameActive.value = false

        let iterations = 0
        const maxIterations = 30
        const interval = setInterval(() => {
            winningIndex.value = Math.floor(Math.random() * betButtonEmojis.value.length)
            iterations++

            if (iterations >= maxIterations) {
                clearInterval(interval)
                finalizeSelection()
            }
        }, 200)
    }

    const finalizeSelection = () => {
        const winningEmoji = betButtonEmojis.value[winningIndex.value!]

        logStore.addLog(`Wining bet is: ${winningIndex.value! + 1} ${winningEmoji}`)

        if (winningIndex.value === selectedIndex.value) {
            logStore.addLog("🎉 YOU WIN!")
            overlayType.value = 'win'
        } else {
            logStore.addLog("❌ You lose.")
            overlayType.value = 'lose'
        }

        setTimeout(showOverlay, 2000)
    }

    const tripledEmojis = (emojis: string[]): string[] => {
        return emojis.reduce<string[]>((acc, emoji) => acc.concat([emoji, emoji, emoji, emoji, emoji]), [])
    }

    const showOverlay = () => {
        const winEmojis = ['🤤', '✨', '💚', '💞', '🥇', '🏆']
        const loseEmojis = ['🥺', '🤬', '🥵', '🆘', '❌', '💔']

        selectedEmojis.value = tripledEmojis(overlayType.value === 'win' ? winEmojis : loseEmojis)
        isOverlayVisible.value = true

        setTimeout(() => {
            isOverlayVisible.value = false
            overlayType.value = null
            selectedEmojis.value = []
            resetGame()
        }, 7000)
    }

    const resetGame = () => {
        selectedIndex.value = null
        winningIndex.value = null
        isGameActive.value = true
        logStore.logMessages = [`${logStore.permanentLog}`]
    }

    return {
        betButtonEmojis,
        selectedIndex,
        winningIndex,
        isGameActive,
        placeBet,
        isOverlayVisible,
        showOverlay,
        selectedEmojis
    }
})
