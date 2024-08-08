import "./NoteList.module.css";
import Note from "../Note"
import useNoteStore from "../../store/useNoteStore";

function NoteList() {
  const { notes } = useNoteStore();

  return <div>
    {notes.map(note => (
      <Note 
        key={note.id}
        note={note}
      />
    ))}
  </div>;
}

export default NoteList;
