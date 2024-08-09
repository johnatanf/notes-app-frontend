import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    email: "user123@gmail.com",
  },
  token: "123",
  setUser: (user, token) => set({ user, token })
}));

export default useUserStore;
