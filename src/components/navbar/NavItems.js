import styles from "./NavItems.module.css";
import resume from "../resume/Nicholas Bingham Resume.pdf";

const pages = ["Home", "My Projects", "About Me", "Contact Me"];
const externals = [
  {
    name: "Github",
    link: "https://github.com/Knikkey",
  },
  {
    name: "Resume",
    link: resume,
  },
];

export default function NavItems({ pageHandler }) {
  return (
    <ul className={styles["nav"]}>
      {pages.map((page, i) => (
        <li key={i} className={styles.li}>
          <button
            value={page}
            className={styles["page-nav"]}
            onClick={pageHandler}
          >
            {page}
          </button>
        </li>
      ))}
      {externals.map((external) => (
        <li key={external.link} className={styles.li}>
          <a
            href={external.link}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.a}
          >
            {external.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
