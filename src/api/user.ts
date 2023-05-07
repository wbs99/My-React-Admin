import { axios } from "../utils/axios"


export const loginApi = (loginForm: LoginForm) => axios.post<LoginResponse>('/user/login', loginForm)