import "./projectpost.css";
import Header, { Pages } from "../../components/Header";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header active={Pages.Projects} />
      <div className="post">{children}</div>
    </div>
  );
}
