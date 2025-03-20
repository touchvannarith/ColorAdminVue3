import { defineStore } from 'pinia'
import type { IAuthCredentials } from '@/types/auth'

interface IUser {
    name: string
}

interface IAuthState {
    user: IUser | null
    token: string
}

export const useAuthStore = defineStore('auth', {
    state: (): IAuthState => ({
        user: null,
        token: ''
    }),
    getters: {
        isAuthenticated: (state): boolean => !!state.token
    },
    actions: {
        login(credentials: IAuthCredentials) {
            // Simulate API response
            this.user = { name: credentials.username }
            this.token = 'mock-jwt-token' // Replace with actual API token

            if (!credentials.rememberMe) {
                sessionStorage.setItem('authToken', this.token)
            }
        },
        logout() {
            this.user = null
            this.token = ''
            sessionStorage.removeItem('authToken')
        }
    },
    persist: true // Enable persistence
})