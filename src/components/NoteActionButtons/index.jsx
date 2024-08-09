import styles from "./NoteActionButtons.module.css";
import useNoteStore from "../../store/useNoteStore";
import useNoteFormStore from "../../store/useNoteFormStore";
import noteService from "../../services/noteService";

function NoteActionButtons({ note }) {
  const { deleteNote } = useNoteStore();
  const { setMode, setUpdatedNote, setTitle, setText } = useNoteFormStore();

  const handleArchive = () => {};

  const handlePin = () => {};

  const handleUpdate = (note) => {
    setMode("edit");
    setUpdatedNote(note);
    setTitle(note.title);
    setText(note.text);
  };

  const handleDelete = async (id) => {
    await noteService.deleteNoteFromBackend(id); // remove from backend
    deleteNote(id); // remove from state
  };

  return (
    <div>
      <button>Archive</button>
      <button>Pin</button>
      <button onClick={() => handleUpdate(note)}>Edit</button>
      <button onClick={() => handleDelete(note.id)}>Delete</button>
    </div>
  );
}

export default NoteActionButtons;
