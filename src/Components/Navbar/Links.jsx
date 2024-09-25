import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import { navItems } from "../../constant";
import { linkItemVariants , linkVariants } from "../variants";
const downloadResume = () => {
  const resumePath = "/resume/resume.pdf";
  saveAs(resumePath, "Himanshu_Kumar_Gola.pdf");
};




const Links = ({ setOpen }) => {
  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
      variants={linkVariants}
    >
      {navItems.map((item) => (
        <motion.a
          className="text-[40px] text-black"
          href={`#${item.path}`}
          key={item.name}
          variants={linkItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {item.name}
        </motion.a>
      ))}
      <motion.button
        variants={linkItemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-[40px] text-black"
        onClick={downloadResume}
      >
        Resume
      </motion.button>
    </motion.div>
  );
};

export default Links;
