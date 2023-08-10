import Image from "next/image";
import Header, { Pages } from "../components/Header";
import emilyProfile from "public/emilyProfile.jpg";
import email from "public/email.png";
import linkedin from "public/linkedin.png";
import github from "public/github.png";
import profile from "@/data/profile";
import styles from "./About.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function About() {
  const pictureSize = 300;
  const iconSize = 40;

  return (
    <div className={utilStyles.thickMargin}>
      <Header active={Pages.About} />
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={emilyProfile}
            alt="profile picture of Emily Liew"
            width={pictureSize}
            height={pictureSize}
            className={styles.profile}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.about}>
            <h2>About Me</h2>
            <p>
              I am a junior currently studying computer science at Georgia Tech,
              focusing on artificial intelligence and information internetworks.
              So far, I have had a lot of fun working on full-stack web
              development, but I am open to experimenting with various fields of
              software engineering. I am particularly passionate about using
              technology and computer science to make a positive impact on
              others. <br />
              <span className={utilStyles.bold}>
                I am currently seeking a software engineering internship for
                Summer 2024.
              </span>
            </p>
          </div>
          <div className={styles.contact}>
            <h2>Contact & Links</h2>
            <div className={styles.linkBar}>
              <a href={`mailto:${profile.email}`}>
                <Image
                  src={email}
                  width={iconSize}
                  height={iconSize}
                  alt="email Emily Liew"
                />
              </a>
              <a href={profile.linkedin} target="_blank">
                <Image
                  src={linkedin}
                  width={iconSize}
                  height={iconSize}
                  alt="visit Emily Liew's LinkedIn"
                />
              </a>
              <a href={profile.github} target="_blank">
                <Image
                  src={github}
                  width={iconSize}
                  height={iconSize}
                  alt="vist Emily Liew's GitHub"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
