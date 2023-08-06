import Image from "next/image";
import Header, { Pages } from "../components/Header";
import emilyProfile from "public/emilyProfile.jpg";
import styles from "./About.module.css";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  const pictureSize = 300;

  return (
    <div>
      <Header active={Pages.About} />
      <Image
        src={emilyProfile}
        width={pictureSize}
        height={pictureSize}
        alt="profile picture of Emily Liew"
        className={styles.profile}
      />
      <p>
        I am a junior currently studying computer science at Georgia Tech,
        focusing on artificial intelligence and information internetworks. So
        far, I have had a lot of fun working on full-stack web development, but
        I am open to experimenting with various fields of software engineering.
        I am particularly passionate about using technology and computer science
        to make a positive impact on others.
        <span className={utilStyles.bold}>
          I am currently seeking a software engineering internship for Summer
          2024.
        </span>
      </p>
    </div>
  );
}
