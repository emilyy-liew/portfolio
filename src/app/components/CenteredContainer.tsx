import styles from "@/styles/posts.module.css";
import { ReactNode } from "react";

export default function CenteredContainer(props: {
  sectionHeader: string;
  sectionText: ReactNode;
}) {
  return (
    <div className={styles.centeredContainer}>
      <h2>{props.sectionHeader}</h2>
      <div>{props.sectionText}</div>
    </div>
  );
}
