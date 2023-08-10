import Header, { Pages } from "@/app/components/Header";
import utilStyles from "@/styles/utils.module.css";

export default function Updates() {
  return (
    <div className={utilStyles.thickMargin}>
      <Header active={Pages.Updates} />
      <p style={{ textAlign: "center" }}>Nothing to see here...yet!</p>
    </div>
  );
}
