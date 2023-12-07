import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LiaSchoolSolid } from "react-icons/lia";
import { TbSchool } from "react-icons/tb";
import { TbSchoolBell } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import EduItem from "./EduItem";

const descStr =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, cupiditate error. Explicabo est ut voluptatem.";

const eduItem = [
  {
    title: "High Schooling",
    grade: "90.8%",
    org: "CBSE",
    time: "2018",
    icon: <TbSchoolBell />,
    desc: descStr,
  },
  {
    title: "Intermediate Schooling",
    grade: "91.4%",
    org: "CBSE",
    time: "2020",
    icon: <LiaSchoolSolid />,
    desc: descStr,
  },
  {
    title: "Bachelor of Technology (CSE)",
    grade: null,
    org: "AKTU",
    time: "2020 - present",
    icon: <TbSchool />,
    desc: descStr,
  },
  {
    title: "Web Development Intern",
    grade: null,
    org: "CodeClause",
    time: "2023",
    icon: <MdDeveloperMode />,
    desc: descStr,
  },
];

// ... (import statements)

const slidingVariant = {
  initial: {
    x: '0%',
  },
  animate: {
    x: '-100%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 30,
      ease: 'linear', // Set the easing function to linear for smooth sliding
    },
  },
};

const Education = () => {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="h-5/6 px-4 py-10 relative">
      <motion.h1
        ref={ref}
        animate={inView ? 'animate' : 'initial'}
        variants={variants}
        className="text-center text-3xl font-medium lg:font-bold  md:font-bold lg:mb-8 md:mb-6 mt-[3rem]"
      >
        Education & Work
      </motion.h1>
      <VerticalTimeline>
        {eduItem.map((item) => (
          <EduItem item={item} key={item.title} />
        ))}
      </VerticalTimeline>
      <motion.div
        variants={slidingVariant}
        initial="initial"
        animate="animate"
        className="absolute w-full font-bold text-[50vh]  bottom-[-120px] left-0 whitespace-nowrap text-[#ffffff09] capitalize"
      >
        My Journey
      </motion.div>
    </div>
  );
};

export default Education;
