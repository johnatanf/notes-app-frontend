import styles from "./Filter.module.css";
import useFilterStore from "../../store/useFilterStore";

function Filter() {
  const { filter, setFilter } = useFilterStore();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter-options">Choose an option:</label>
      <select id="filter-options" name="options" value={filter} onChange={handleChange}>
        <option value="active">active notes</option>
        <option value="archived">archived</option>
      </select>
    </div>
  );
}

export default Filter;
