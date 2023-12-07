import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SlidingAnimation from "../Sub/SlidingAnimation";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset : ["start start" , "end end"]
  });

  // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="overflow-hidden  w-full h-full flex items-center justify-center">
        {/* wrapper */}
        <div className=" flex1 max-w-[1366px] h-full m-auto flex lg:gap-[50px] md:gap-[50px] items-center justify-center flex-col lg:flex-row md:flex-row ">
          <div
            className="flex-1 lg:h-[300px] flex justify-center items-center    sm:max-h-[300px] sm:w-full  "
            ref={ref}
          >
            <img
              src="/pic.jpg"
              alt="projects"
              className="w-full h-full  object-contain lg:object-cover"
            />
          </div>
          <motion.div
            className="flex flex1 flex-col gap-[30px] items-center justify-center p-[10px] lg:p-0"
            // style={{ y }}
          >
            <h2 className="text-3xl">{item?.title}</h2>
            <p className="text-base text-center lg:text-lg text-gray-300 opacity-80">
              {item?.desc}
            </p>
            <button className="bg-orange-400 border-none rounded-[10px]  p-[10px] w-52 cursor-pointer text-[#0D0D1F]">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div ref={ref} className="relative ">
      <div className="sticky top-0 left-0 pt-12  text-center">
        <h1 className=" text-orange-400 text-3xl md:text-4xl lg:text-5xl mt-[3rem] mb-2">
          Successful Projects I'm Proud Of
        </h1>
        <motion.div
          style={{ scaleX }}
          className="h-[10px] bg-white "
        ></motion.div>
        <h2 className="text-base lg:text-lg md:text-lg my-3 hidden lg:block opacity-60 capitalize">
          No better way to get experience than real-life projects
        </h2>
        <SlidingAnimation title={"Projects"}/>
      </div>

      {items.map((item, index) => (
        <Single item={item} key={index} />
      ))}
    </div>
  );
};

export default Projects;
