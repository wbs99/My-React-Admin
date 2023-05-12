import { create } from "zustand"
import { devtools, persist } from 'zustand/middleware'

type Me = {
  me: LoginResponse
  setMe: (data: LoginResponse) => void
}

export const useMeStore = create<Me>()(
  devtools(
    persist(
      (set) => ({
        me: {
          _id: '',
          email: '',
          token: '',
        },
        setMe: (data) => {
          set(state => ({
            ...state,
            me: { ...state.me, ...data }
          }))
        },
      }),
      {
        name: 'meStore',
      }
    )
  )
)