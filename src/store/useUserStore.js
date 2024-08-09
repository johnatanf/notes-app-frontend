import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {},
  token: null,
  setUser: (user, token) => set({ user, token })
}));

export default useUserStore;
