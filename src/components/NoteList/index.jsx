import styles from "./NoteList.module.css";
import Note from "../Note";
import useNoteStore from "../../store/useNoteStore";
import useSortStore from "../../store/useSortStore";
import useFilterStore from "../../store/useFilterStore";

function NoteList() {
  const { notes } = useNoteStore();
  const { sort } = useSortStore();
  const { filter } = useFilterStore();
  const activeNotesFilter = (note) => note.archived === false;
  const archivedNotesFilter = (note) => note.archived === true;

  const sortByTitle = (a, b) => {
    if (a.pinned === b.pinned) {
      return a.title.localeCompare(b.title);
    }
    return a.pinned ? -1 : 1;
  };

  const sortByCreatedDate = (a, b) => {
    if (a.pinned === b.pinned) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return a.pinned ? -1 : 1;
  };

  return (
    <div className={styles.container}>
      {notes
        .filter((note) => {
          if (filter === "archived") {
            return archivedNotesFilter(note);
          } else {
            return activeNotesFilter(note);
          }
        })
        .sort((a, b) => {
          if (sort === "created-at") {
            return sortByCreatedDate(a, b);
          } else {
            return sortByTitle(a, b);
          }
        })
        .map((note) => (
          <Note key={note.id} note={note} />
        ))}
    </div>
  );
}

export default NoteList;
