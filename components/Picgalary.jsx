import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid } from "./Picgrid";
const Picgalary = ({ card }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className=" h-screen  py-20 w-full relative  overflow-scroll "
    >
      {card?.map((item) => {
        return <LayoutGrid cards={item} />;
      })}
    </motion.div>
  );
};

export default Picgalary;
