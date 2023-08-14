import Link from "next/link";
import styles from "@/styles/Header.module.css";

export enum Pages {
  Projects = "projects",
  About = "about",
  Home = "home",
  Updates = "updates",
  Resume = "resume",
}

export default function Header(props: { active: Pages }) {
  return (
    <div className={styles.container}>
      <Link
        className={
          props.active === Pages.Home
            ? `${styles.active} ${styles.home}`
            : `${styles.inactive} ${styles.home}`
        }
        href={"/"}
      >
        home
      </Link>

      <Link
        className={
          props.active === Pages.Projects ? styles.active : styles.inactive
        }
        href={"/projects"}
      >
        projects
      </Link>

      {/* <Link
        className={
          props.active === Pages.Updates ? styles.active : styles.inactive
        }
        href={"/updates"}
      >
        updates
      </Link> */}

      <Link
        className={
          props.active === Pages.Resume ? styles.active : styles.inactive
        }
        href={"/resume"}
      >
        resume
      </Link>

      <Link
        className={
          props.active === Pages.About ? styles.active : styles.inactive
        }
        href={"/about"}
      >
        about
      </Link>
    </div>
  );
}
