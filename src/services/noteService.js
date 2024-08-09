import uuid4 from "uuid4";
import useNoteStore from "../store/useNoteStore";

const addNoteToBackend = async (newNote) => {
  try {
    return {
      id: uuid4(),
      title: newNote.title,
      text: newNote.text,
      archived: false,
      pinned: false,
      createdAt: new Date().toISOString().slice(0, 10),
      updatedAt: new Date().toISOString().slice(0, 10),
    };
  } catch (error) {
    console.error("Error adding note:", error);
    throw error;
  }
};

const getNotesFromBackend = async () => {
  try {
    return [
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
    ];
  } catch (error) {
    console.log("Error retrieving notes:", error);
    throw error;
  }
};

const updateNoteInBackend = async (id, updatedNoteInput) => {
  try {
    const { notes } = useNoteStore.getState();

    const initialNote = notes.find((note) => note.id === id);
    const updatedNoteOutput = { ...initialNote, ...updatedNoteInput };
    return updatedNoteOutput;
  } catch (error) {
    console.log("Error updating note:", error);
    throw error;
  }
};

const deleteNoteFromBackend = async (id) => {
  try {
    console.log(`simulating deletion of note ${id}`);
  } catch (error) {
    console.log("Error deleting note:", error);
    throw error;
  }
};

export default {
  addNoteToBackend,
  getNotesFromBackend,
  updateNoteInBackend,
  deleteNoteFromBackend,
};
