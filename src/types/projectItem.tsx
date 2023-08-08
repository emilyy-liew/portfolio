import { StaticImageData } from "next/image";

type projectItem = {
  imgSrc: StaticImageData;
  color: string;
  title: string;
  description: string;
  shortDescription: string;
  skill: string[];
  readMoreLink: string;
  githubLink: string;
  websiteLink?: string;
};

export default projectItem;
