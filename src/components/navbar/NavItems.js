import "./NavItems.module.css";

import styles from "./NavItems.module.css";

export default function NavItems({
  ulClass,
  liClass,
  setSeeContactForm,
  toggleMenu,
}) {
  return (
    <div>
      <ul className={ulClass} onClick={toggleMenu}>
        <li className={`${styles.li} ${liClass}`}>
          <a href="#projects" className={styles.a}>
            My Projects
          </a>
        </li>

        <li className={`${styles.li} ${liClass}`}>
          <a href="#bio" className={styles.a}>
            About me
          </a>
        </li>

        <li className={`${styles.li} ${liClass}`}>
          <a
            href="https://github.com/Knikkey"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.a}
          >
            GitHub
          </a>
        </li>

        <li className={`${styles.li} ${liClass}`}>
          <a href="/" className={styles.a}>
            Resume
          </a>
        </li>

        <li className={`${styles.li} ${liClass}`}>
          <div className={styles.a} onClick={() => setSeeContactForm(true)}>
            Contact me
          </div>
        </li>
      </ul>
    </div>
  );
}
