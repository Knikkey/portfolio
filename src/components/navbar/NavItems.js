import { Link } from "react-router-dom";

import styles from "./NavItems.module.css";
import resume from "../resume/Nicholas Bingham Resume.pdf";

const pages = [
  { label: "Home", path: "/" },
  { label: "My Projects", path: "/projects" },
  { label: "About Me", path: "/bio" },
  { label: "Contact Me", path: "/contact" },
];
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

export default function NavItems() {
  return (
    <ul className={styles["nav"]}>
      {pages.map((page, i) => (
        <li key={i} className={styles.li}>
          <Link to={page.path} className={styles["page-nav"]}>
            {page.label}
          </Link>
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
