import "./NoteForm.module.css";
import { useState } from "react";
import useNoteStore from "../../store/useNoteStore";
import useNoteFormStore from "../../store/useNoteFormStore";
import noteService from "../../services/noteService";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const { addNote } = useNoteStore();
  const { setMode, setUpdateId } = useNoteFormStore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newNote = await noteService.addNoteToBackend({ title, text }); // add to backend
    addNote(newNote); // save to state

    setText("");
    setTitle("");
    setMode("create");
    setUpdateId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          required
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title..."
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
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NoteForm;
