const MyToken = 'token'

export const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(MyToken) || 'null')
  },
  setToken: (token: string) => {
    window.localStorage.setItem(MyToken, JSON.stringify(token))
  },
  removeToken: () => {
    window.localStorage.removeItem(MyToken)
  }
}