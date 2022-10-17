import { useState } from "react";

import NavItems from "./components/navbar/NavItems";
import Namecard from "./sections/hero/Namecard";
import Projects from "./sections/projects/Projects";
import Bio from "./sections/bio/Bio";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";

function App() {
  const [page, setPage] = useState("Home");

  const pageHandler = (e) => {
    setPage(e.target.value);
  };

  return (
    <div className={`flex-col ${styles["app-container"]}`}>
      <div className={`flex-col ${styles["name-card"]}`}>
        <div className={styles["component-container"]}>
          {page === "Home" && <Namecard />}
          {page === "My Projects" && <Projects />}
          {page === "About Me" && <Bio />}
          {page === "Contact Me" && <Contact />}
        </div>
        <NavItems pageHandler={pageHandler} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
