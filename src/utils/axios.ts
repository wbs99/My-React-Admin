import { message } from 'antd'
import Axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'


export const axios = Axios.create({
  baseURL: '/api',
})

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.apiKey = import.meta.env.VITE_API_KEY
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
      return Promise.reject(data)
    }
  },
  error => {
    const message = error.response?.data?.message || error.message
    message.error(message)
    return Promise.reject(error)
  }
)