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
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuid4(),
      title: "My SECOND note",
      text: "Blah blah blah random text",
      archived: false,
      pinned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  deleteNote: (id) =>
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
}));

export default useNoteStore;
