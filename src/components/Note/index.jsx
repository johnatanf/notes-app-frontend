import styles from "./Note.module.css";
import useNoteFormStore from "../../store/useNoteFormStore";
import NoteActionButtons from "../NoteActionButtons";

function Note({ note }) {
  const { mode } = useNoteFormStore();

  return (
    <div
      className={`${styles.container} ${note.archived ? styles.archived : ""} ${
        note.pinned ? styles.pinned : ""
      }`}
    >
      <p className={styles.title}>{note.title}</p>
      <p className={styles.text}>{note.text}</p>
      <p className={styles.info}>{note.createdAt.toString()}</p>
      {mode !== "edit" && <NoteActionButtons note={note} />}
    </div>
  );
}

export default Note;
