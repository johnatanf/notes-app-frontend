import useUserStore from "../store/useUserStore";
import useNoteStore from "../store/useNoteStore";
import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const addNoteToBackend = async (newNote) => {
  const { setUser, setIsAuthenticated } = useUserStore.getState();
  try {
    const response = await axios.post(
      `${apiUrl}/notes`,
      { title: newNote.title, text: newNote.text },
      { withCredentials: true }
    );

    return response.data; // id, user_account_id, createdAt, updatedAt, archived, pinned, title, text
  } catch (error) {
    console.error("Error adding note:", error);
    setUser({}, null);
    setIsAuthenticated(false);
    throw error;
  }
};

const getNotesFromBackend = async () => {
  const { setUser, setIsAuthenticated } = useUserStore.getState();
  try {
    const response = await axios.get(`${apiUrl}/notes`, {
      withCredentials: true,
    });

    const data = response.data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        text: item.text,
        archived: item.archived,
        pinned: item.pinned,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      };
    });

    return data;
  } catch (error) {
    console.log("Error retrieving notes:", error);
    setUser({}, null);
    setIsAuthenticated(false);
    throw error;
  }
};

const updateNoteInBackend = async (id, updatedNoteInput) => {
  const { setUser, setIsAuthenticated } = useUserStore.getState();
  try {
    const { notes } = useNoteStore.getState();

    const initialNote = notes.find((note) => note.id === id);
    const updatedNoteOutput = { ...initialNote, ...updatedNoteInput };

    const response = await axios.patch(
      `${apiUrl}/notes/${initialNote.id}`,
      updatedNoteInput,
      { withCredentials: true }
    );

    return updatedNoteOutput;
  } catch (error) {
    console.log("Error updating note:", error);
    setUser({}, null);
    setIsAuthenticated(false);
    throw error;
  }
};

const deleteNoteFromBackend = async (id) => {
  const { setUser, setIsAuthenticated } = useUserStore.getState();
  try {
    await axios.delete(`${apiUrl}/notes/${id}`, { withCredentials: true });
  } catch (error) {
    console.log("Error deleting note:", error);
    setUser({}, null);
    setIsAuthenticated(false);
    throw error;
  }
};

export default {
  addNoteToBackend,
  getNotesFromBackend,
  updateNoteInBackend,
  deleteNoteFromBackend,
};
