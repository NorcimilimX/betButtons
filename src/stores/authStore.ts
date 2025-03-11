import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, db, setDoc, doc } from '@/firebase'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<string | null>('user')
    const errorMessage = ref<string | null>(null)

    const register = async (name: string, email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            user.value = userCredential.user.email
            await setDoc(doc(db, "users", userCredential.user.uid), { name, email })
        } catch (error: any) {
            errorMessage.value = error.message
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            user.value = userCredential.user.email
        } catch (error: any) {
            errorMessage.value = error.message
        }
    }

    const logout = async () => {
        await signOut(auth)
        user.value = null
    }


    return { user, errorMessage, register, login, logout }
})