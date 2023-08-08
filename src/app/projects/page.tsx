import Header, { Pages } from "../../components/Header";
import ProjectIcon from "../../components/ProjectIcon";
import bounce from "../../data/projects";
import styles from "./page.module.css";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <div>
      <Header active={Pages.Projects} />
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectIcon project={project} />
        ))}
      </div>
    </div>
  );
}
