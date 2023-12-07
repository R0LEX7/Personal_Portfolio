import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { textVariant } from "../variants";
import SlidingAnimation from "../Sub/SlidingAnimation";

const Hero = () => {
  return (
    <div className="hero mt-24">
      <div className="max-w-[1366px] h-full m-auto">
        <motion.div
          className="h-full  z-10flex-wrap md:items-center lg:items-start  mt-[100px] lg:mt-0 flex flex-col  justify-center gap-[16px] lg:gap-[40px] p-4 lg:text-container md:text-container"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariant}
            className="lg:text-7xl md:text-6xl text-4xl text-center text-orange-400 tracking-wider"
          >
            Himanshu Kumar Gola
          </motion.h2>
          <motion.h1
            variants={textVariant}
            className="text-xl  text-center lg:text-start lg:text-4xl"
          >
            MERN Developer & Software Engineer
          </motion.h1>
          <motion.p
            variants={textVariant}
            className=" lg:w-[600px] lg:text-xl text-sm whitespace-normal opacity-80"
          >
            Hi there! My name is Himanshu Kumar Gola, a final-year student with
            a passion for coding and technology.I'm eager to embark on my
            software engineering journey.
          </motion.p>
          <SocialLinks />
          <motion.div
            variants={textVariant}
            className="flex justify-center w-full "
          >
            <motion.img
              variants={textVariant}
              animate="scrollBtn"
              className="w-[50px] "
              src="/scroll.png"
              alt="scroll"
            />
          </motion.div>
        </motion.div>
      </div>
      <SlidingAnimation title={"MERN Developer & Software Engineer"} />
      <div className="lg:h-full absolute top-[-40px] flex-col justify-center right-0 lg:right-8 flex items-center w-full lg:w-auto">
        <img
          className="w-[300px] md:w-[400px] lg:w-[450px] rounded-full p-10 cursor-pointer"
          src="/pic.jpg"
          alt="Himanshu"
        />
      </div>
    </div>
  );
};

export default Hero;
