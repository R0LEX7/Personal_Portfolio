import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillItems = ({ icon, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  const imgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      className="w-28 h-28 p-6 border rounded-full border-[#663399] flex items-center justify-center columns-4"
      ref={ref}
      
      initial="hidden"
      variants={imgVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      {icon && (
        <div className="text-7xl font-bold hover:text-[#663399] hover:scale-[1.1] delay-100 ease-in-out">
          {icon}
        </div>
      )}
    </motion.div>
  );
};

export default SkillItems;
