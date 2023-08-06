import Image, { StaticImageData } from "next/image";
import styles from "./FeaturedProject.module.css";
import Link from "next/link";

export enum FeaturedProjectLayout {
  Left,
  Right,
}

export default function FeaturedProject(props: {
  imgSrc: StaticImageData;
  color: string;
  title: string;
  description: string;
  skill: string[];
  layout: FeaturedProjectLayout;
  readMoreLink: string;
  githubLink: string;
  websiteLink?: string;
}) {
  const image = (
    <div
      className={styles.imageContainer}
      style={{ backgroundColor: `${props.color}` }}
    >
      <Image
        src={props.imgSrc}
        alt={`Image of the ${props.title}`}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={300}
        height={200}
      />
    </div>
  );

  const words = (
    <div className={styles.words}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul>
        <h4>Skills Used:</h4>
        <div className={styles.skillsContainer}>
          <div className={styles.list}>
            {props.skill.map((skill, index) => {
              if (index % 2 == 0) {
                return <li>{skill}</li>;
              }
            })}
          </div>
          <div>
            {props.skill.map((skill, index) => {
              if (index % 2 == 1) {
                return <li>{skill}</li>;
              }
            })}
          </div>
        </div>
      </ul>
      <div className={styles.linkBar}>
        <Link className={styles.links} href={props.readMoreLink}>
          Read More →
        </Link>
        <a className={styles.links} href={props.githubLink} target="_blank">
          GitHub Repo →
        </a>
        {props.websiteLink && (
          <a className={styles.links} href={props.websiteLink} target="_blank">
            Try {props.title} →
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
