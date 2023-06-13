import { create } from 'zustand'

export interface UserStateTypes {
  isLoggedIn: boolean
}

interface UserStoreTypes extends UserStateTypes {
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

const getInitialState: () => UserStateTypes = () => {
  return {
    isLoggedIn: false,
  }
}

const useUserStore = create<UserStoreTypes>((set) => ({
  ...getInitialState(),

  setIsLoggedIn: (isLoggedIn) => {
    set(() => ({ isLoggedIn }))
  },
}))

export default useUserStore
