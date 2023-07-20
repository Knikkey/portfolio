import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        &copy; Nicholas Bingham 2022. No rights reserved. There's no actual
        copyright. I just wanna look fancy.
      </span>
      <a
        href="https://www.flaticon.com/free-icons/hipster"
        title="hipster icons"
      >
        Favicon: Hipster icons created by Freepik - Flaticon
      </a>
    </footer>
  );
}
