import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";

import ToggleButton from "./ToggleBtn";

const variants = {
  open: {
    clipPath: "circle(1600px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="flex flex-col items-center justify-center bg-white text-black" animate={open ? "open" : "closed"}>
      <motion.div className="z-[999] fixed top-0 left-0 bottom-0 w-full bg-white " variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
