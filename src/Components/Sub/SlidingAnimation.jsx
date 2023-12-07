import { motion } from "framer-motion";
import { slidingVariant } from "../variants";

const SlidingAnimation = ({title}) => {
  return (
    <motion.div
        variants={slidingVariant}
        initial="initial"
        animate="animate"
        className="absolute z-[-1] w-full font-bold text-[50vh]  bottom-[-120px] left-0 whitespace-nowrap text-[#ffffff09] capitalize"
      >
       {title}
      </motion.div>
  )
}

export default SlidingAnimation
