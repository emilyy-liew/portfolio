import Header, { Pages } from "../components/Header";

export default function Projects() {
  return (
    <div>
      <Header active={Pages.Projects} />
      <h1>Projects</h1>
    </div>
  );
}
