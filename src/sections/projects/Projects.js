import { useEffect, useState } from "react";
import { database, collection, getDocs } from "../../firebase/config";

import Filter from "../../components/filter/Filter";
import dropdown from "./icons/dropdown.svg";

import styles from "./Projects.module.css";

const langFilter = [
  { label: "All languages", value: "all" },
  { label: "Vanilla JavaScript", value: "js" },
  { label: "React", value: "react" },
  { label: "Firebase", value: "firebase" },
];
const dateFilter = [
  { label: "Date (newest)", value: "new" },
  { label: "Date (oldest)", value: "old" },
];

export default function Projects() {
  const [projects, setProjects] = useState(null);
  const [filter, setFilter] = useState("All languages");
  const [sort, setSort] = useState("new");

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const filteredProjects = projects
    ? projects.filter((project) => {
        if (filter === "All languages") return true;
        else {
          return project.languages.includes(filter);
        }
      })
    : null;

  const sortedProjects =
    filteredProjects && sort === "new"
      ? filteredProjects.sort(function (a, b) {
          return b.id - a.id;
        })
      : filteredProjects;

  useEffect(() => {
    async function getProjects() {
      const projectsCol = collection(database, "projects");
      const snapshot = await getDocs(projectsCol);
      const projectsList = snapshot.docs.map((doc) => doc.data());
      setProjects(projectsList);
    }
    getProjects();
  }, []);

  const openDropdown = (e) => {
    e.currentTarget.nextElementSibling.classList.toggle(
      styles["bullet-dropdown-open"]
    );
    e.currentTarget.nextElementSibling.classList.toggle(
      styles["bullet-dropdown-closed"]
    );
  };

  return (
    <div className="section fadeIn">
      <div className={styles["filter-container"]}>
        <Filter
          label="Filter by language"
          arr={langFilter}
          handler={filterHandler}
        />
        <p className="page-header">My Projects</p>
        <Filter label="Sort by" arr={dateFilter} handler={sortHandler} />
      </div>

      {!sortedProjects ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <ul className={`${styles["projects-container"]} flex-col fadeIn`}>
          {sortedProjects.map((project) => (
            <li key={project.id} className={`fadeIn ${styles["project-card"]}`}>
              {/* title */}
              <div className={styles["project-header"]}>
                <p className={`subtitle ${styles["project-title"]}`}>
                  {project.title}
                </p>
                {/* languages */}
                <ul className={styles.flex}>
                  {project.languages.map((lang) => (
                    <li key={lang}>
                      <p className={styles.languages}>{lang}</p>
                    </li>
                  ))}
                </ul>
                {/* links */}
                <ul className={`${styles.flex} ${styles.links}`}>
                  <li key={project.githubLink}>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GitHub
                    </a>
                  </li>
                  <li key={project.websiteLink}>
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Website
                    </a>
                  </li>
                </ul>
              </div>

              {/* preview */}
              <img
                src={project.previewURL}
                alt="website preview gif"
                className={styles.gif}
              />

              <div className={`flex-col ${styles["project-info-container"]}`}>
                {/* description */}
                <div>
                  <span className={styles["project-subtitle"]}>
                    Description:
                  </span>
                  <p className={styles.description}>{project.description}</p>
                </div>

                {/* bullet box */}
                <div className={styles["bullet-container"]}>
                  {/* features */}
                  <div style={{ width: "50%" }}>
                    <div
                      className={`${styles["project-subtitle"]} ${styles.dropdown}`}
                      onClick={openDropdown}
                    >
                      <p>Features:</p>
                      <img
                        className={styles["dropdown-icon"]}
                        src={dropdown}
                        alt="dropdown menu icon"
                      />
                    </div>
                    <ul
                      className={`${styles["small-text"]} ${styles["bullet-dropdown-closed"]}`}
                    >
                      {project.features.map((feature) => {
                        return (
                          <li key={feature.trim()} className={styles.li}>
                            {feature}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* learned list */}
                  <div style={{ width: "50%" }}>
                    <div
                      className={`${styles["project-subtitle"]} ${styles.dropdown}`}
                      onClick={openDropdown}
                    >
                      <p>Concepts learned:</p>
                      <img
                        className={styles["dropdown-icon"]}
                        src={dropdown}
                        alt="dropdown menu icon"
                      />
                    </div>
                    <ul
                      className={`${styles["small-text"]} ${styles["bullet-dropdown-closed"]}`}
                    >
                      {project.learnedList.map((concept) => {
                        return (
                          <li key={concept.trim()} className={styles.li}>
                            {concept}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* biggest challenge */}
                <div>
                  <p className={styles["project-subtitle"]}>
                    Biggest challenge in this project:
                  </p>
                  <p className={styles["small-text"]}>
                    {project.biggestChallenge}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
