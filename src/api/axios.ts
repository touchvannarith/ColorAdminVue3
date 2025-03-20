import { useAuthStore } from "@/stores/auth-store";
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.example.com', // Replace with your backend URL
    headers: {
        'Content-Type': 'application/json'
    }
})

const authStore = useAuthStore()

// Attach token to requests
api.interceptors.request.use(config => {
    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
})

// Handle token expiration
api.interceptors.response.use(
    response => response,
    async error => {
        try {
            // Attempt to refresh token
            const response = await axios.post('/auth/refresh')
            authStore.token = response.data.accessToken
            sessionStorage.setItem('authToken', authStore.token)
            error.config.headers.Authorization = `Bearer ${authStore.token}`
            return axios(error.config) // Retry the original request
        } catch {
            authStore.logout()
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)
  
export default api