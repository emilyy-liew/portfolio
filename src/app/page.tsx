import styles from "./page.module.css";
import Header from "./components/Header";
import { Pages } from "./components/Header";
import FeaturedProject, {
  FeaturedProjectLayout,
} from "./components/FeaturedProject";
import bounceRecipes from "../../public/bounceRecipes.png";
import bounceTasks from "../../public/bounceTasks.png";

export default function Home() {
  return (
    <div>
      <Header active={Pages.Home} />

      <div className={styles.pageContainer}>
        <section className={styles.intro}>
          <h1>
            Hi, I'm Emily Liew, a junior currently studying computer science at
            Georgia Tech to create software that will positively impact others'
            lives.
          </h1>
          <p>
            I am currently seeking a software engineering internship for Summer
            2024. Email me with any opportunities or questions! →{" "}
            <a href="mailto: eliew3@gatech.edu">eliew3@gatech.edu</a>
          </p>
        </section>

        <section className={styles.featured}>
          <h2>Featured Projects:</h2>
          <FeaturedProject
            imgSrc={bounceTasks}
            title="Bounce"
            description="Bounce is a full-stack web app, powered by React,  
                        TypeScript, and AWS, offering users an efficient platform 
                        to track recipes and manage to-do tasks. Bounce has an automatic task management 
                        system with automatic task prioritization based on deadllines and task duration 
                        as well as a Recipe Dashboard with recipe management and real-time sorting based 
                        on available ingredients, ensuring seamless organization and productivity for 
                        its users. Data persistence is achieved through back-end database connectivity, 
                        enhancing user experience and convenience."
            skill={[
              "TypeScript",
              "AWS",
              "React",
              "Next.js",
              "REST APIs",
              "Node.js",
            ]}
            layout={FeaturedProjectLayout.Left}
            readMoreLink="/projects/bounce"
            githubLink="https://github.com/emilyy-liew/bounce"
            websiteLink="main.d2ngor7ea7fphp.amplifyapp.com/"
          />
        </section>
      </div>
    </div>
  );
}
