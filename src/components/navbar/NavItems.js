import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NavItems.module.css";
import resume from "../resume/Nicholas Bingham Resume - public.pdf";
import menuIcon from "./menuIcon.svg";

const pages = [
  { label: "Home", path: "/" },
  { label: "My Projects", path: "/projects" },
  { label: "About Me", path: "/bio" },
  { label: "Contact Me", path: "/contact" },
];
const externals = [
  {
    name: "GitHub",
    link: "https://github.com/Knikkey",
  },
  {
    name: "Resume",
    link: resume,
  },
];

export default function NavItems() {
  const [open, setOpen] = useState(false);

  const navRef = useRef();
  const btnRef = useRef();

  const menuHandler = () => {
    navRef.current.classList.toggle(styles["show-menu"]);
    open && btnRef.current.classList.add(styles["menu-btn--spin"]);
    !open && btnRef.current.classList.add(styles["menu-btn--reverse-spin"]);
    setOpen((prev) => !prev);
  };

  const animationReset = () => {
    btnRef.current.classList.remove(styles["menu-btn--spin"]);
    btnRef.current.classList.remove(styles["menu-btn--reverse-spin"]);
  };

  return (
    <>
      <nav ref={navRef}>
        <ul className={styles["nav"]}>
          {pages.map((page) => (
            <li key={page.path} className={styles.li}>
              <Link
                to={page.path}
                className={styles["page-nav"]}
                onClick={menuHandler}
              >
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
                onClick={menuHandler}
              >
                {external.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={styles["menu-btn"]}
          onClick={menuHandler}
          onAnimationEnd={animationReset}
          ref={btnRef}
        >
          <img
            src={menuIcon}
            alt="open/close menu"
            className={styles["menu-icon"]}
          />
        </button>
      </nav>
    </>
  );
}
