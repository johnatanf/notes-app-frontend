import { create } from "zustand";

const useUserStore = create((set) => ({
  isAuthenticated: null,
  setIsAuthenticated: (authenticated) =>
    set({ isAuthenticated: authenticated }),
  user: {},
  token: null,
  setUser: (user, token) => set({ user, token }),
}));

export default useUserStore;
