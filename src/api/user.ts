import { axios } from "../utils/axios"

export const loginApi = (loginForm: LoginForm): Promise<LoginResponse> =>
  axios.post('/user/login', loginForm)

export const userInfoApi = (): Promise<LoginResponse> => axios.get('/user/info')