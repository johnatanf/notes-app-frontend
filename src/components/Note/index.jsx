import styles from "./Note.module.css";

function Note({ id, title, text, archived, pinned, createdAt, updatedAt }) {

  const handleArchive = () => {

  }

  const handlePin = () => {
    
  }
  
  const handleUpdate = () => {

  }

  const handleDelete = () => {

  }

  return (
    <div
      className={`${styles.div} ${archived ? styles.archived : ""} ${
        pinned ? styles.pinned : ""
      }`}
    >
      <p>{id}</p>
      <p>{title}</p>
      <p>{text}</p>
      <p>{archived}</p>
      <p>{pinned}</p>
      <p>{createdAt.toString()}</p>
      <p>{updatedAt.toString()}</p>
      <button>Archive</button>
      <button>Pin</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Note;
