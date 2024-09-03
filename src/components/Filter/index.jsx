import styles from "./Filter.module.css";
import useFilterStore from "../../store/useFilterStore";

function Filter() {
  const { filter, setFilter } = useFilterStore();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="filter-options" className={styles.label}>Filter:</label>
      <select id="filter-options" name="options" value={filter} onChange={handleChange} className={styles.select}>
        <option value="active">active notes</option>
        <option value="archived">archived</option>
      </select>
    </div>
  );
}

export default Filter;
