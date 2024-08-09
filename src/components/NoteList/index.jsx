import styles from "./NoteList.module.css";
import Note from "../Note"
import useNoteStore from "../../store/useNoteStore";
import useFilterStore from "../../store/useFilterStore";

function NoteList() {
  const { notes } = useNoteStore();
  const { filter } = useFilterStore()
  const activeNotesFilter = (note) => note.archived === false
  const archivedNotesFilter = (note) => note.archived === true

  return <div>
    {notes
    .filter((note) => {
      if (filter === 'archived') {
        return archivedNotesFilter(note)
      } else {
        return activeNotesFilter(note)
      }
    })
    .map(note => (
      <Note 
        key={note.id}
        note={note}
      />
    ))}
  </div>;
}

export default NoteList;
