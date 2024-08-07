import { create } from "zustand";

const useNoteFormStore = create((set) => ({
  mode: "create",
  //   setMode: (mode) => set({ mode }),
  setMode: (mode) => set({ mode }),
  updateId: "",
  setUpdateId: (updateId) => set({ updateId }),
}));

export default useNoteFormStore;
