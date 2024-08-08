import styles from "./Note.module.css";
import useNoteStore from "../../store/useNoteStore";
import useNoteFormStore from "../../store/useNoteFormStore";
import noteService from "../../services/noteService";

function Note({ note }) {
  const { deleteNote } = useNoteStore();
  const { setMode, setUpdatedNote, setTitle, setText } = useNoteFormStore();

  const handleArchive = () => {};

  const handlePin = () => {};

  const handleUpdate = (note) => {
    setMode('edit')
    setUpdatedNote(note)
    setTitle(note.title)
    setText(note.text)
  };

  const handleDelete = async (id) => {
    await noteService.deleteNoteFromBackend(id); // remove from backend
    deleteNote(id); // remove from state
  };

  return (
    <div
      className={`${styles.div} ${note.archived ? styles.archived : ""} ${
        note.pinned ? styles.pinned : ""
      }`}
    >
      <p>{note.id}</p>
      <p>{note.title}</p>
      <p>{note.text}</p>
      <p>{note.archived}</p>
      <p>{note.pinned}</p>
      <p>{note.createdAt.toString()}</p>
      <p>{note.updatedAt.toString()}</p>
      <button>Archive</button>
      <button>Pin</button>
      <button onClick={() => handleUpdate(note)}>Edit</button>
      <button onClick={() => handleDelete(note.id)}>Delete</button>
    </div>
  );
}

export default Note;
