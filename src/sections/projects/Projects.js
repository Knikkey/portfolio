import { useState, useEffect } from "react";
import { database, collection, getDocs } from "../../firebase/config";

import Filter from "../../components/filter/Filter";

import styles from "./Projects.module.css";
import Accordion from "../../components/accordion/Accordion";

const langFilter = [
  { label: "All languages", value: "All languages" },
  { label: "Vanilla JavaScript", value: "Vanilla JavaScript" },
  { label: "React", value: "React" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "SASS/SCSS", value: "SASS/SCSS" },
  { label: "Firebase", value: "Firebase" },
];
const dateFilter = [
  { label: "Date (newest)", value: "new" },
  { label: "Date (oldest)", value: "old" },
];

export default function Projects() {
  const [projects, setProjects] = useState(
    JSON.parse(window.sessionStorage.getItem("PROJECTS"))
  );
  const [filter, setFilter] = useState("All languages");
  const [sort, setSort] = useState("new");
  const [error, setError] = useState(null);

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  //with local storage
  useEffect(() => {
    if (!projects) {
      const requestDocs = async () => {
        const projectsCol = collection(database, "projects");
        try {
          const snapshot = await getDocs(projectsCol);
          const projectsList = snapshot.docs.map((doc) => doc.data());
          setProjects(projectsList);
          window.sessionStorage.setItem(
            "PROJECTS",
            JSON.stringify(projectsList)
          );
        } catch (err) {
          setError(err);
        }
      };
      requestDocs();
      const data = window.sessionStorage.getItem("PROJECTS");
      setProjects(JSON.parse(data));
    }
  }, [projects]);

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

  return (
    <div className="section fadeIn">
      <div className={styles["filter-container"]}>
        <Filter
          label="Filter by language"
          arr={langFilter}
          handler={filterHandler}
          cl={styles.filter}
        />
        <p className={`page-header ${styles.title}`}>My Projects</p>
        <Filter
          label="Sort by"
          arr={dateFilter}
          handler={sortHandler}
          cl={styles.filter}
        />
      </div>

      {!sortedProjects ? (
        <p className={styles.loading}>
          {!error ? "Loading..." : `An error occured (Error message: ${error})`}
        </p>
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
                  <Accordion
                    label="Features"
                    data={project.features}
                    cl={styles["dropdown-query"]}
                  />
                  <Accordion
                    label="Concepts Learned"
                    data={project.learnedList}
                    cl={styles["dropdown-query"]}
                  />
                </div>

                {/* biggest challenge */}
                <div>
                  <p className={styles["project-subtitle"]}>
                    Biggest challenge in this project:
                  </p>
                  <p className={styles.description}>
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
