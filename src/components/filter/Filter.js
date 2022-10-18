import styles from "./Filter.module.css";

export default function Filter({ label, arr, handler, cl }) {
  return (
    <div className={`flex-col ${styles.filter}`}>
      <label className={`${cl} ${styles.label}`}>{label}:</label>
      <select className={`${cl} ${styles.select}`} onChange={handler}>
        {arr.map((el) => (
          <option value={el.value} key={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    </div>
  );
}
