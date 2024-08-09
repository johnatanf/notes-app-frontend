import { create } from "zustand";

const useFilterStore = create((set) => ({
  filter: 'active',
  setFilter: (filter) => set({ filter }),
}));

export default useFilterStore;
