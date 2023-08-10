import Image from "next/image";
import mail from "@/../public/email.png";
import linkedin from "@/../public/linkedin.png";
import github from "@/../public/github.png";
import profile from "@/data/profile";
import styles from "@/styles/VerticalLinksBar.module.css";
export default function VerticalLinksBar(props: {}) {
  const iconSize: number = 50;

  return (
    <div className={styles.iconbar}>
      <a href={`mailto:${profile.email}`}>
        <Image
          src={mail}
          alt={"email"}
          width={iconSize}
          height={iconSize}
          className={styles.icon}
        />
      </a>
      <a href={profile.linkedin} target="_blank">
        <Image
          src={linkedin}
          alt={"linkedin"}
          width={iconSize}
          height={iconSize}
          className={styles.icon}
        />
      </a>
      <a href={profile.github} target="_blank">
        <Image
          src={github}
          alt={"github"}
          width={iconSize}
          height={iconSize}
          className={styles.icon}
        />
      </a>
    </div>
  );
}
