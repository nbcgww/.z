import { create } from 'zustand'

interface UserState {
  isLogin: boolean
  setLogin: (val: boolean) => void
}

export const useUserStore = create<UserState>()((set) => ({
  isLogin: true,
  setLogin: (val) => set({ isLogin: val }),
}))
