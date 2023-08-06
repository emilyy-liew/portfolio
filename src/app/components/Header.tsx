import Link from "next/link";
import styles from "./Header.module.css";

export enum Pages {
  Projects = "projects",
  About = "about",
  Home = "home",
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
