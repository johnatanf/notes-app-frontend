import "./NoteList.module.css";
import Note from "../Note"
import useNoteStore from "../../store/useNoteStore";

function NoteList() {
  const { notes } = useNoteStore();

  return <div>
    {notes.map(note => (
      <Note 
        key={note.id}
        id={note.id}
        title={note.title}
        text={note.text}
        archived={note.archived}
        pinned={note.pinned}
        createdAt={note.createdAt}
        updatedAt={note.updatedAt}
      />
    ))}
  </div>;
}

export default NoteList;
