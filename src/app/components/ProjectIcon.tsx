import Image from "next/image";
import Link from "next/link";
import projectItem from "../../types/projectItem";
import styles from "@/styles/ProjectIcon.module.css";

export default function ProjectIcon(props: { project: projectItem }) {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={props.project.readMoreLink}>
        <div
          className={styles.imageContainer}
          style={{ backgroundColor: `${props.project.color}` }}
        >
          <Image
            src={props.project.imgSrc[0]}
            alt={`Image of the ${props.project.title}`}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={300}
            height={200}
          />
        </div>
        <h2>{props.project.title}</h2>
        <p>{props.project.shortDescription}</p>
      </Link>
    </div>
  );
}
