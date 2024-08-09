import styles from "./NoteActionButtons.module.css";
import useNoteStore from "../../store/useNoteStore";
import useNoteFormStore from "../../store/useNoteFormStore";
import noteService from "../../services/noteService";

function NoteActionButtons({ note }) {
  const { updateNote, deleteNote } = useNoteStore();
  const { setMode, setUpdatedNote, setTitle, setText } = useNoteFormStore();

  const handleUpdate = (note) => {
    // saving to backend and frontend state handled in NoteForm
    setMode("edit");
    setUpdatedNote(note);
    setTitle(note.title);
    setText(note.text);
  };

  const handleDelete = async (id) => {
    await noteService.deleteNoteFromBackend(id); // remove from backend
    deleteNote(id); // remove from state
  };

  
  const handleArchive = async () => {
    if(note.archived === true) {
      await noteService.updateNoteInBackend(note.id, { archived: false })
      updateNote(note.id, { archived: false })
    } else {
      await noteService.updateNoteInBackend(note.id, { archived: true })
      updateNote(note.id, { archived: true })
    }
  };

  const handlePin = async (note) => {
    if(note.pinned === true) {
      await noteService.updateNoteInBackend(note.id, { pinned: false })
      updateNote(note.id, { pinned: false })
    } else {
      await noteService.updateNoteInBackend(note.id, { pinned: true })
      updateNote(note.id, { pinned: true })
    }
  };

  return (
    <div>
      <button onClick={() => handleArchive(note)}>Archive</button>
      <button onClick={() => handlePin(note)}>Pin</button>
      <button onClick={() => handleUpdate(note)}>Edit</button>
      <button onClick={() => handleDelete(note.id)}>Delete</button>
    </div>
  );
}

export default NoteActionButtons;
