import styles from "./Note.module.css";
import useNoteFormStore from "../../store/useNoteFormStore";
import NoteActionButtons from "../NoteActionButtons"

function Note({ note }) {
  const { mode } = useNoteFormStore();

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
      { mode === 'edit' ? null : <NoteActionButtons note={note} /> }
    </div>
  );
}

export default Note;
