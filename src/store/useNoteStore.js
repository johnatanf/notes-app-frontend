import { create } from "zustand";
import uuid4 from "uuid4";

const useNoteStore = create((set) => ({
  notes: [
    {
      id: uuid4(),
      title: "My first note",
      text: "This is a random long text",
      archived: false,
      pinned: false,
      createdAt: "2024-08-09",
      updatedAt: "2024-08-09",
    },
    {
      id: uuid4(),
      title: "My SECOND note",
      text: "Blah blah blah random text",
      archived: false,
      pinned: false,
      createdAt: "2024-08-05",
      updatedAt: "2024-08-05",
    },
  ],
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (id, updatedData) => set((state) => ({
    notes: state.notes.map(note => note.id === id ? { ...note, ...updatedData } : note)
  })),
  deleteNote: (id) =>
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
}));

export default useNoteStore;
