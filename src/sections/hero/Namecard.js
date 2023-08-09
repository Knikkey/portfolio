import html5Icon from "./icons/html5Icon.svg";
import css3Icon from "./icons/css3Icon.svg";
import javascriptIcon from "./icons/javascriptIcon.svg";
import reactIcon from "./icons/reactIcon.svg";
import firebaseIcon from "./icons/firebaseIcon.svg";
import sassIcon from "./icons/sassIcon.svg";
import typescriptIcon from "./icons/typescriptIcon.svg";
import expressIcon from "./icons/expressIcon.svg";
import nextjsIcon from "./icons/nextjsIcon.svg";
import nodejsIcon from "./icons/nodejsIcon.svg";
import postgresqlIcon from "./icons/postgresqlIcon.svg";
import reduxIcon from "./icons/reduxIcon.svg";

import styles from "./Namecard.module.css";

const codingLanguages = [
  { logo: html5Icon, text: "HTML", alt: "html logo" },
  { logo: css3Icon, text: "CSS", alt: "css logo" },
  { logo: sassIcon, text: "Sass/scss", alt: "sass logo" },
  { logo: javascriptIcon, text: "JavaScript", alt: "javascript logo" },
  { logo: typescriptIcon, text: "TypeScript", alt: "typescript logo" },
  { logo: reactIcon, text: "React", alt: "react logo" },
  { logo: reduxIcon, text: "Redux", alt: "redux logo" },
  { logo: nextjsIcon, text: "Next.js", alt: "next.js logo" },
  { logo: nodejsIcon, text: "Node.js", alt: "node.js logo" },
  { logo: expressIcon, text: "Express", alt: "express logo" },
  { logo: postgresqlIcon, text: "PostgreSQL", alt: "postgresql logo" },
  { logo: firebaseIcon, text: "Firebase", alt: "firebase logo" },
];

export default function Namecard() {
  return (
    <section className={`${styles["namecard-container"]} fadeIn`}>
      <h1 className={styles.title}>Nicholas Bingham</h1>
      <div className={styles["occupation-container"]}>
        <h2 className={styles.occupation}>Web developer</h2>
      </div>

      <ul className={styles["logo-container"]}>
        {codingLanguages.map((lang) => {
          return (
            <li
              key={lang.text}
              className={`flex-col ${styles["lang-container"]}`}
            >
              <img src={lang.logo} alt={lang.alt} className={styles.logo} />
              <p className={styles.languages}>{lang.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
