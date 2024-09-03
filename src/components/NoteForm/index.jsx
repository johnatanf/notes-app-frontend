import "./NoteForm.module.css";
import useNoteStore from "../../store/useNoteStore";
import useNoteFormStore from "../../store/useNoteFormStore";
import noteService from "../../services/noteService";
import styles from "./NoteForm.module.css";

function NoteForm() {
  const { addNote, updateNote } = useNoteStore();
  const {
    mode,
    setMode,
    updatedNote,
    setUpdatedNote,
    title,
    setTitle,
    text,
    setText,
  } = useNoteFormStore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (mode === "edit") {
      // edit mode
      const updateNoteBackend = await noteService.updateNoteInBackend(
        updatedNote.id,
        { title, text }
      ); // update in backend
      updateNote(updatedNote.id, { title, text }); // save to state (frontend)
    } else {
      // create mode
      const newNote = await noteService.addNoteToBackend({ title, text }); // add to backend
      console.log(newNote)
      addNote(newNote); // save to state (frontend)
    }

    setMode("create");
    setTitle("");
    setText("");
    setUpdatedNote({});
  };

  const handleCancel = async () => {
    setMode("create");
    setUpdatedNote({});
    setTitle("");
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${mode === 'edit' ? styles.edit : ''}`}
    >
      <div className={styles.field}>
        <label htmlFor="title">Title:</label>
        <input
          required
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title..."
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Note text..."
          required
          className={styles.textarea}
        />
      </div>
      <button type="submit" className={styles.submitButton}>Submit</button>
      {mode === "edit" ? <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button> : null}
    </form>
  );
}

export default NoteForm;
