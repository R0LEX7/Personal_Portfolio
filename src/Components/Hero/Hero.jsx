import { motion } from "framer-motion";
const textVariant = {
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
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidingVariant = {
    initial :{
        x: 0,
    },
    animate : {
        x :"-220%",
        transition : {
            repeat : Infinity,
            repeatType : "mirror",
            duration : 20,
        }
    }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="max-w-[1366px] h-full m-auto">
        <motion.div
          className="h-full flex-wrap md:items-center lg:items-start  mt-[100px] lg:mt-0 flex flex-col  justify-center gap-[15px] lg:gap-[40px] p-4 lg:text-container md:text-container"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariant}
            className="lg:text-7xl md:text-6xl text-3xl text-center text-[rebeccapurple] tracking-wider"
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
          <motion.div variants={textVariant} className="flex justify-center">
            <motion.button
              variants={textVariant}
              className="p-[10px] lg:p-[15px] rounded-[10px] border-white border bg-transparent text-white mr-[20px] cursor-pointer font-[300]"
            >
              Latest Works
            </motion.button>
            <motion.button
              variants={textVariant}
              className="p-[10px] lg:p-[15px] rounded-[10px] border-white border bg-transparent text-white mr-[20px] cursor-pointer font-[300]"
            >
              Contact me
            </motion.button>
          </motion.div>
          <motion.div
            variants={textVariant}
            className="flex justify-center w-full "
          >
            <motion.img
              variants={textVariant}
              animate = "scrollBtn"
              className="w-[50px] "
              src="/scroll.png"
              alt="scroll"
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div variants={slidingVariant} initial= "initial" animate= "animate" className="absolute w-1/2 font-bold text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] capitalize">
        Full stack developer Software Engineer
      </motion.div>
      <div className="lg:h-full absolute top-[-40px] justify-center right-0 lg:right-8 flex items-center w-full lg:w-auto">
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
