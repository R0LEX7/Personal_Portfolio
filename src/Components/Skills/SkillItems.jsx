import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillItems = ({ icon, index , name }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  const imgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.07;

  return (
    <motion.div className="flex flex-col items-center hover:text-orange-400  hover:scale-[1.1] delay-80 ease-in mb-2">
    <motion.div
      className="w-24 h-24 lg:w-24 lg:h-24 p-6 border rounded-full border-[#663399]  hover:border-orange-400 flex items-center justify-center columns-4"
      ref={ref}

      initial="hidden"
      variants={imgVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      >
      {icon && (
        <div className="text-6xl p-2 font-bold   ">
          {icon}
        </div>
      )}
    </motion.div>
      <p className="text-sm font-medium" >{name}</p>
      </motion.div>
  );
};

export default SkillItems;
