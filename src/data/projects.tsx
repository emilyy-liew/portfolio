import projectItem from "../types/projectItem";
import bounceRecipes from "../../public/bounceRecipes.png";
import ogPlanner from "@/../public/ogPlanner.jpg";
import bounceBrainstorm from "@/../public/bounceBrainstorm.jpeg";
import bounceTasks from "../../public/bounceTasks.png";

export const bounce: projectItem = {
  imgSrc: [bounceTasks, bounceRecipes, bounceBrainstorm, ogPlanner],
  color: "rgb(255, 152, 115)",
  title: "Bounce",
  description:
    "Bounce is a full-stack web app, powered by React, TypeScript, and AWS, offering users an efficient platform to track recipes and manage tasks. Bounce has an automatic task management system with automatic task prioritization based on deadllines and task duration as well as a Recipe Dashboard with recipe management and real-time sorting based on available ingredients, ensuring seamless organization and productivity for its users. Data persistence is achieved through back-end database connectivity, enhancing user experience and convenience.",
  shortDescription:
    "Bounce is a full-stack web app, powered by React, TypeScript, and AWS, offering users an efficient platform to track recipes and manage tasks.",
  skill: ["TypeScript", "AWS", "React", "Next.js", "REST APIs", "Node.js"],
  readMoreLink: "/projects/bounce",
  githubLink: "https://github.com/emilyy-liew/bounce",
  websiteLink: "https://main.d2ngor7ea7fphp.amplifyapp.com/",
};

const projects: projectItem[] = [bounce];

export default projects;
