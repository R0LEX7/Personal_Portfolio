// constants/skills.ts or mySkills.tsx

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiRedux, SiExpress, SiAppwrite, SiVisualstudiocode, SiZod } from "react-icons/si";
import { FaReact, FaNodeJs, FaCodeBranch } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs ,SiPostgresql , SiTypescript } from "react-icons/si";


export const mySkills = [
  { skill_name: "Html 5", icon: <FaHtml5 />, width: 80, height: 80 },
  { skill_name: "Css", icon: <IoLogoCss3 />, width: 80, height: 80 },
  { skill_name: "Javascript", icon: <IoLogoJavascript />, width: 65, height: 65 },
  { skill_name: "Typescript", icon: <SiTypescript />, width: 45, height: 45 },
  { skill_name: "C++", icon: <TbBrandCpp />, width: 55, height: 55 },
  { skill_name: "React", icon: <FaReact />, width: 80, height: 80 },
  { skill_name: "Redux", icon: <SiRedux />, width: 80, height: 80 },

  { skill_name: "Node js", icon: <FaNodeJs />, width: 80, height: 80 },
  { skill_name: "Express js", icon: <SiExpress />, width: 80, height: 80 },
  { skill_name: "Mongo db", icon: <DiMongodb />, width: 55, height: 55 },
  { skill_name: "Tailwind Css", icon: <SiTailwindcss />, width: 80, height: 80 },
  { skill_name: "Next.js", icon: <SiNextdotjs/>, width: 80, height: 80 },
  { skill_name: "Zod", icon: <SiZod />, width: 55, height: 55 },

  // { skill_name: "Postgresql ", icon: <SiPostgresql  />, width: 55, height: 55 },
  // { skill_name: "Firebase", icon: <IoLogoFirebase />, width: 55, height: 55 },
  // { skill_name: "Appwrite", icon: <SiAppwrite />, width: 55, height: 55 },
  // { skill_name: "Github", icon: <FaCodeBranch />, width: 55, height: 55 },
  // { skill_name: "VS Code", icon: <SiVisualstudiocode />, width: 55, height: 55 },
];

export const Frontend_skill = [
  { skill_name: "Html 5", icon: "/html.png", width: 80, height: 80 },
  { skill_name: "Css", icon: "/css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", icon: "/js.png", width: 65, height: 65 },
  { skill_name: "Tailwind Css", icon: "/tailwind.png", width: 80, height: 80 },
  { skill_name: "Material UI", icon: "/mui.png", width: 80, height: 80 },
  { skill_name: "React", icon: "/react.png", width: 80, height: 80 },
  { skill_name: "Redux", icon: "/redux.png", width: 80, height: 80 },
  { skill_name: "React Query", icon: "/reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", icon: "/ts.png", width: 80, height: 80 },
  { skill_name: "Next.js", icon: "/next.png", width: 80, height: 80 },
  { skill_name: "Zustand", icon: "/zustand.png", width: 70, height: 70 },
  { skill_name: "ShadCN UI", icon: "/shadcn.png", width: 70, height: 70 },
  { skill_name: "Zod", icon: "/zod.png", width: 60, height: 60 }, // Add this PNG to public/
];

export const Backend_skill = [
  { skill_name: "Node.js", icon: "/node-js.png", width: 80, height: 80 },
  { skill_name: "Express.js", icon: "/express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", icon: "/mongodb.png", width: 40, height: 40 },
  { skill_name: "Firebase", icon: "/Firebase.png", width: 55, height: 55 },
  { skill_name: "PostgreSQL", icon: "/postgres.png", width: 70, height: 70 },
  { skill_name: "MySQL", icon: "/mysql.png", width: 70, height: 70 },
  { skill_name: "Prisma", icon: "/prisma.webp", width: 70, height: 70 },
  { skill_name: "GraphQL", icon: "/graphql.png", width: 80, height: 80 },
];

export const Full_stack = [
  { skill_name: "React Native", icon: "/ReactNative.png", width: 70, height: 70 },
  { skill_name: "Tauri", icon: "/tauri.svg", width: 70, height: 70 },
  { skill_name: "Docker", icon: "/docker.webp", width: 70, height: 70 },
  { skill_name: "Figma", icon: "/figma.png", width: 50, height: 50 },
];

export const Other_skill = [
  { skill_name: "Go", icon: "/go.png", width: 60, height: 60 },
];

export const Socials = [
  { name: "Discord", src: "/discord.svg" },
  { name: "Facebook", src: "/facebook.svg" },
  { name: "Instagram", src: "/instagram.svg" },
];
