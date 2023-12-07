import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./mouse.scss";
import useMousePosition from "../../utils/useMousePosition";

const Cursor = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="cursor"
      animate={{ x: x + 10, y: y + 10 }}
      transition={{ type: "tween", stiffness: 100 }}
    ></motion.div>
  );
};

export default Cursor;
