import { motion } from "framer-motion";

const items = [
  { name: "Home", path: "home" },
  { name: "Skills", path: "skills" },
  { name: "Education", path: "education" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
  { name: "about", path: "about" },
];

const variants = {
  open: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
      staggerDirection: 1
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          className="text-[40px] text-black"
          href={`#${item.path}`}
          key={item.name}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
