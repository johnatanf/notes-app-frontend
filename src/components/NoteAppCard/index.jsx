import styles from './NoteAppCard.module.css';

const NoteAppCard = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default NoteAppCard;
