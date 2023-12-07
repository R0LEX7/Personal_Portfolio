import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();
  console.log(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="w-full h-full relative flex items-center justify-center"
      style={{
        background:
          type === "education"
            ? "linear-gradient(180deg , #111132 , #0c0c1d)"
            : "linear-gradient(180deg , #111132 , #505064)",
      }}
    >
      <motion.h1
        style={{ y: yText }}
        className=" capitalize text-4xl lg:text-[100px]"
      >
        {type === "education" ? "What i do?" : "what i did ?"}
      </motion.h1>
      <motion.div className="bg-[url('/mountains.png')]  z-30 bg-cover bg-bottom w-full h-full absolute"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "education" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className=" z-20  bg-cover bg-bottom w-full h-full absolute"
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="bg-[url('/stars.png')] z-10 bg-cover bg-bottom w-full h-full absolute"
      ></motion.div>
    </div>
  );
};

export default Parallax;
