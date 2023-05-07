import { message } from 'antd'
import Axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'
import { storage } from './storage'


export const axios = Axios.create({
  baseURL: '/api',
})

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.apiKey = import.meta.env.VITE_API_KEY
    const token = storage.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }
)

axios.interceptors.response.use(
  response => {
    const { data } = response
    if (data.code === 0) {
      return data.data
    } else {
      message.error(data.message)
      if (data.code === -666) {
        storage.removeToken()
        window.location.href = '/login'
      }
      return Promise.reject(data)
    }
  },
  error => {
    const message = error.response?.data?.message || error.message
    message.error(message)
    return Promise.reject(error)
  }
)