import { create } from "zustand";
import uuid4 from "uuid4";

const useNoteStore = create((set) => ({
  notes: [],
  setNotes: (notes) => set({ notes }),
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (id, updatedData) => set((state) => ({
    notes: state.notes.map(note => note.id === id ? { ...note, ...updatedData } : note)
  })),
  deleteNote: (id) =>
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
}));

export default useNoteStore;
