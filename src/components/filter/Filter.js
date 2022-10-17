import styles from "./Filter.module.css";

export default function Filter({ label, arr, handler }) {
  return (
    <div className={`flex-col ${styles.filter}`}>
      <label className={styles.label}>{label}:</label>
      <select className={styles.select} onChange={handler}>
        {arr.map((el) => (
          <option value={el.value}>{el.label}</option>
        ))}
      </select>
    </div>
  );
}
