import Image from "next/image";
import Header, { Pages } from "@/app/components/Header";
import download from "@/../public/download.png";
import styles from "./resume.module.css";
import utilStyles from "@/styles/utils.module.css";

export default function Resume() {
  const iconSize = 50;
  return (
    <div className={utilStyles.thickMargin}>
      <Header active={Pages.Resume} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href={"/EmilyLiewResume2025.pdf"} download>
          <div className={styles.container}>
            <h2>Download my Resume </h2>
            <Image
              src={download}
              width={iconSize}
              height={iconSize}
              alt="Download my resume"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
