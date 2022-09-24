import React from "react";
import { motion } from "framer-motion";

type Props = {
   directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
   return (
      <div className="group relative flex cursor-pointer">
         <motion.img
            initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="javascript.svg"
            className="rounded-full border border-[#787775] w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
         />
         <motion.div
            initial={{ x: directionLeft ? -200 : 200 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
         >
            <div className="flex items-center justify-center h-full">
               <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
         </motion.div>
      </div>
   );
};

export default Skill;
