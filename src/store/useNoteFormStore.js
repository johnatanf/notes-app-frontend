import { create } from "zustand";

const useNoteFormStore = create((set) => ({
  title: "",
  setTitle: (title) => set( { title }),
  text: "",
  setText: (text) => set( { text }),
  mode: "create",
  setMode: (mode) => set({ mode }),
  updatedNote: {},
  setUpdatedNote: (updatedNote) => set({ updatedNote }),
}));

export default useNoteFormStore;
