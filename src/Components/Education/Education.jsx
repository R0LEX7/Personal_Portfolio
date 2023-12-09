import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LiaSchoolSolid } from "react-icons/lia";
import { TbSchool } from "react-icons/tb";
import { TbSchoolBell } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { eduVariants } from "../variants";
import EduItem from "./EduItem";
import SlidingAnimation from "../Sub/SlidingAnimation";


const eduItem = [
  {
    title: "High Schooling",
    grade: "90.8%",
    org: "Central Board of Secondary Education",
    time: "2018",
    icon: <TbSchoolBell />,
    desc: "Done High School board from New st. Stephen Public School (Agra).",
  },
  {
    title: "Intermediate Schooling",
    grade: "91.4%",
    org: "Central Board of Secondary Education",
    time: "2020",
    icon: <LiaSchoolSolid />,
    desc: "Pursued from Saraswati Vidya Mandir (Agra). ",
  },
  {
    title: "Bachelor of Technology (CSE)",
    grade: null,
    org: "AKTU",
    time: "2020 - present",
    icon: <TbSchool />,
    desc: "Learning software development fundamentals along with software engineering, Team management and personality development and communication skills.",
  },
  {
    title: "Web Development Intern",
    grade: null,
    org: "CodeClause",
    time: "2023",
    icon: <MdDeveloperMode />,
    desc: "Worked on the Web application to improve the UI along with improving code quality and reusability in the application.",
  },
];


const Education = () => {
  

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div className="h-5/6 px-4 py-10 relative">
      <motion.h1
        ref={ref}
        animate={inView ? 'animate' : 'initial'}
        variants={eduVariants}
        className=" z-10 text-3xl lg:text-[72px] lg:leading-[88px] lg:mb-10 text-center text-orange-400 font-bold mt-[3rem]"
        >
        Qualifications
      </motion.h1>
      <VerticalTimeline>
        {eduItem.map((item) => (
          <EduItem item={item} key={item.title} />
        ))}
      </VerticalTimeline>
<SlidingAnimation title={"My Journey"}/>
    </motion.div>
  );
};

export default Education;
