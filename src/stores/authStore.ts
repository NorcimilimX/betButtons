import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    db, setDoc, doc, getDoc
} from '@/firebase'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<string | null>(null)
    const userName = ref<string | null>(null)
    const errorMessage = ref<string | null>(null)
    const logoutTimer = ref<number | null>(null)

    const LOGIN_DURATION = 15 * 60 * 1000

    const startLogoutTimer = () => {
        if (logoutTimer.value) {
            clearTimeout(logoutTimer.value)
        }
        logoutTimer.value = setTimeout(() => {
            logout()
        }, LOGIN_DURATION) as unknown as number
    }

    const register = async (name: string, email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            user.value = userCredential.user.email
            userName.value = name

            await setDoc(doc(db, "users", userCredential.user.uid), { name, email })
            localStorage.setItem("authUser", JSON.stringify({ email, name, timestamp: Date.now() }))

            startLogoutTimer()
        } catch (error: any) {
            errorMessage.value = error.message
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            user.value = userCredential.user.email

            // Отримуємо ім'я користувача з Firestore
            const userDoc = await getDoc(doc(db, "users", userCredential.user.uid))
            if (userDoc.exists()) {
                userName.value = userDoc.data().name
            }

            localStorage.setItem("authUser", JSON.stringify({ email, name: userName.value, timestamp: Date.now() }))
            startLogoutTimer()
        } catch (error: any) {
            errorMessage.value = error.message
        }
    }

    const logout = async () => {
        await signOut(auth)
        user.value = null
        userName.value = null
        localStorage.removeItem("authUser")
        if (logoutTimer.value) {
            clearTimeout(logoutTimer.value)
        }
    }

    onMounted(() => {
        const storedUser = localStorage.getItem("authUser")
        if (storedUser) {
            const { email, name, timestamp } = JSON.parse(storedUser)
            const elapsedTime = Date.now() - timestamp

            if (elapsedTime < LOGIN_DURATION) {
                user.value = email
                userName.value = name
                startLogoutTimer()
            } else {
                logout()
            }
        }
    })

    return { user, userName, errorMessage, register, login, logout }
})
