import { create } from "zustand";

const useSortStore = create((set) => ({
  sort: 'title',
  setSort: (sort) => set({ sort }),
}));

export default useSortStore;
