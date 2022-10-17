import dropdown from "./dropdown.svg";

import styles from "./Accordion.module.css";

export default function Accordion({ label, data }) {
  const openDropdown = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle(
      styles["bullet-dropdown-open"]
    );
  };
  return (
    <div className={styles["half-width"]}>
      <div
        className={`${styles["project-subtitle"]} ${styles.dropdown}`}
        onClick={openDropdown}
      >
        <p>{label}:</p>
        <img
          className={styles["dropdown-icon"]}
          src={dropdown}
          alt="dropdown menu icon"
        />
      </div>
      <ul
        className={`${styles["small-text"]} ${styles["bullet-dropdown-closed"]}`}
      >
        {data.map((el) => {
          return (
            <li key={el.trim()} className={styles.li}>
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
