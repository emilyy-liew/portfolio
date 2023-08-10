import Header, { Pages } from "../components/Header";
import ProjectIcon from "../components/ProjectIcon";
import bounce from "../../data/projects";
import styles from "./page.module.css";
import projects from "../../data/projects";
import utilStyles from "@/styles/utils.module.css";

export default function Projects() {
  return (
    <div className={utilStyles.thickMargin}>
      <Header active={Pages.Projects} />
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectIcon project={project} />
        ))}
      </div>
    </div>
  );
}
