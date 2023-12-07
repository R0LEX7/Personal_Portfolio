import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="h-[100px] flex">
      
      <Sidebar/>
      <div className=" text-white  flex fixed w-[1366px]  text-2xl lg:text-4xl mt-[2.2rem]  left-[60%] lg:left-[86%]
      md:left-[78%]  z-30 top-0 cursor-pointer ">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Himanshu.
        </motion.span>
      </div>
    </div>
  );
};

export default Navbar;