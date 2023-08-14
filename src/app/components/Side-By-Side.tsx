import Image, { StaticImageData } from "next/image";
import styles from "@/styles/posts.module.css";
import { ReactNode } from "react";

export enum SideBySideLayout {
  Left,
  Right,
}

export default function SideBySide(props: {
  imgSrc: StaticImageData;
  altText: string;
  sectionHeader: string[];
  sectionText: ReactNode[];
  layout: SideBySideLayout;
}) {
  const image = (
    <div className={styles.imageContainer}>
      <Image
        src={props.imgSrc}
        alt={props.altText}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "20px",
        }}
        width={300}
        height={200}
        priority
      />
    </div>
  );

  const words = (
    <div className={styles.textBlock}>
      {props.sectionHeader.map((header, index) => (
        <div>
          <h2>{header}</h2>

          <div>{props.sectionText[index]}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ display: "flex", margin: "5% 0", padding: "20px 0" }}>
      {props.layout == SideBySideLayout.Left ? image : words}
      {props.layout == SideBySideLayout.Left ? words : image}
    </div>
  );
}
