import styles from "./Sort.module.css";
import useSortStore from "../../store/useSortStore";

function Sort() {
  const { sort, setSort } = useSortStore();

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="sort-options" className={styles.label}>Sort by:</label>
      <select id="sort-options" name="options" value={sort} onChange={handleChange} className={styles.select}>
        <option value="created-at">create date</option>
        <option value="title">title</option>
      </select>
    </div>
  );
}

export default Sort;
