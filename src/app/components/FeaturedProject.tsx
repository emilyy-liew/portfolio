import Image, { StaticImageData } from "next/image";
import styles from "./FeaturedProject.module.css";
import Link from "next/link";

export enum FeaturedProjectLayout {
  Left,
  Right,
}

export default function FeaturedProject(props: {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  skill: string[];
  layout: FeaturedProjectLayout;
  readMoreLink: string;
  githubLink: string;
  websiteLink?: string;
}) {
  const image = (
    <div className={styles.imageContainer}>
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
        Skills Used:
        {props.skill.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <Link href={props.readMoreLink}>Read More →</Link>
      </div>
      <div className={styles.links}>
        <a href={props.githubLink}>GitHub Repo →</a>
      </div>
      {props.websiteLink && (
        <div className={styles.links}>
          <a href={props.websiteLink}>Try {props.title} →</a>
        </div>
      )}
    </div>
  );
  return (
    <div className={styles.container}>
      {props.layout === FeaturedProjectLayout.Left ? image : words}
      {props.layout === FeaturedProjectLayout.Left ? words : image}
    </div>
  );
}
