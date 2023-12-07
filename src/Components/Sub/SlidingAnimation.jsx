import { motion } from "framer-motion";




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

const SlidingAnimation = ({title}) => {
  return (
    <motion.div
        variants={slidingVariant}
        initial="initial"
        animate="animate"
        className="absolute w-full font-bold text-[50vh]  bottom-[-120px] left-0 whitespace-nowrap text-[#ffffff09] capitalize"
      >
       {title}
      </motion.div>
  )
}

export default SlidingAnimation