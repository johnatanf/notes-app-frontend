import uuid4 from "uuid4";

const addNoteToBackend = async (newNote) => {
  try {
    return {
      id: uuid4(),
      title: newNote.title,
      text: newNote.text,
      archived: false,
      pinned: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  } catch (error) {
    console.error("Error adding note:", error);
    throw error;
  }
};

const getNotesFromBackend = async () => {
  try {
  } catch (error) {
    console.log("Error retrieving notes:", error);
    throw error;
  }
};

const updateNoteInBackend = async () => {
  try {
  } catch (error) {
    console.log("Error updating note:", error);
    throw error;
  }
};

const deleteNoteFromBackend = async () => {
  try {
  } catch (error) {
    console.log("Error deleting note:", error);
    throw error;
  }
};

export default { addNoteToBackend, getNotesFromBackend, updateNoteInBackend, deleteNoteFromBackend };
