import styles from "./page.module.css";
import Header from "../components/Header";
import { Pages } from "../components/Header";
import FeaturedProject, {
  FeaturedProjectLayout,
} from "../components/FeaturedProject";
import { bounce } from "../data/projects";
import utilStyles from "@/styles/utils.module.css";

export default function Home() {
  return (
    <div className={utilStyles.thickMargin}>
      <Header active={Pages.Home} />

      <div className={styles.pageContainer}>
        <section className={styles.intro}>
          <h1>
            Hi, I'm Emily Liew, a junior currently studying computer science at
            Georgia Tech to create software that will positively impact others'
            lives.
          </h1>
          <p style={{ fontStyle: "italic" }}>
            I am currently seeking a software engineering internship for Summer
            2024. Email me with any opportunities or questions! →{" "}
            <a href="mailto: eliew3@gatech.edu">eliew3@gatech.edu</a>
          </p>
        </section>

        <section className={styles.featured}>
          <h2>Featured Projects:</h2>
          <FeaturedProject
            project={bounce}
            layout={FeaturedProjectLayout.Left}
            priority
          />
        </section>
      </div>
    </div>
  );
}
