import styles from "./Note.module.css";
import useNoteStore from "../../store/useNoteStore";
import noteService from "../../services/noteService";

function Note({ id, title, text, archived, pinned, createdAt, updatedAt }) {
  const { deleteNote } = useNoteStore()

  const handleArchive = () => {};

  const handlePin = () => {};

  const handleUpdate = () => {};

  const handleDelete = async () => {
    await noteService.deleteNoteFromBackend(id) // remove from backend
    deleteNote(id) // remove from state
  };

  return (
    <div
      className={`${styles.div} ${archived ? styles.archived : ""} ${
        pinned ? styles.pinned : ""
      }`}
    >
      <p>{id}</p>
      <p>{title}</p>
      <p>{text}</p>
      <p>{archived}</p>
      <p>{pinned}</p>
      <p>{createdAt.toString()}</p>
      <p>{updatedAt.toString()}</p>
      <button>Archive</button>
      <button>Pin</button>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Note;
