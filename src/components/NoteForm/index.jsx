import "./NoteForm.module.css";
import { useState } from "react";
import useNoteStore from "../../store/useNoteStore";
import noteService from "../../services/noteService";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [mode, setMode] = useState("create"); // options 'create', 'edit'

  const { addNote } = useNoteStore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newNote = await noteService.addNoteToBackend({ title, text }) // add to backend
    addNote(newNote) // save to state

    setText("");
    setTitle("");
    setMode("create");
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
