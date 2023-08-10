import Image from "next/image";
import styles from "@/styles/FeaturedProject.module.css";
import Link from "next/link";
import projectItem from "../../types/projectItem";

export enum FeaturedProjectLayout {
  Left,
  Right,
}

export default function FeaturedProject(props: {
  project: projectItem;
  layout: FeaturedProjectLayout;
  priority?: boolean;
}) {
  const image = (
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
        priority={props.priority}
      />
    </div>
  );

  const words = (
    <div className={styles.words}>
      <h3>{props.project.title}</h3>
      <p>{props.project.description}</p>
      <ul>
        <h4>Skills Used:</h4>
        <div className={styles.skillsContainer}>
          <div className={styles.list}>
            {props.project.skill.map((skill, index) => {
              if (index % 2 == 0) {
                return <li>{skill}</li>;
              }
            })}
          </div>
          <div>
            {props.project.skill.map((skill, index) => {
              if (index % 2 == 1) {
                return <li>{skill}</li>;
              }
            })}
          </div>
        </div>
      </ul>
      <div className={styles.linkBar}>
        <Link className={styles.links} href={props.project.readMoreLink}>
          Read More →
        </Link>
        <a
          className={styles.links}
          href={props.project.githubLink}
          target="_blank"
        >
          GitHub Repo →
        </a>
        {props.project.websiteLink && (
          <a
            className={styles.links}
            href={props.project.websiteLink}
            target="_blank"
          >
            Try {props.project.title} →
          </a>
        )}
      </div>
    </div>
  );
  return (
    <div className={styles.container}>
      {props.layout === FeaturedProjectLayout.Left ? image : words}
      {props.layout === FeaturedProjectLayout.Left ? words : image}
    </div>
  );
}
