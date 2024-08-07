import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    username: "user123"
  },
  token: null,
  setUser: (user, token) => set({ user, token })
}));

export default useUserStore;
