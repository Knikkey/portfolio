import { Routes, Route } from "react-router-dom";

import NavItems from "./components/navbar/NavItems";
import Namecard from "./sections/hero/Namecard";
import Projects from "./sections/projects/Projects";
import Bio from "./sections/bio/Bio";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";

function App() {
  return (
    <div className={`flex-col ${styles["app-container"]}`}>
      <div className={`flex-col ${styles["name-card"]}`}>
        <div className={styles["component-container"]}>
          <Routes>
            <Route path="/" element={<Namecard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <NavItems />
      </div>
      <Footer />
    </div>
  );
}

export default App;
