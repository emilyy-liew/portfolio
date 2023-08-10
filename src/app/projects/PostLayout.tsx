import "./projectpost.css";
import Header, { Pages } from "../../components/Header";
import utilStyles from "@/styles/utils.module.css";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={utilStyles.thickMargin}>
        <Header active={Pages.Projects} />
      </div>
      <div className="post">{children}</div>
    </div>
  );
}
