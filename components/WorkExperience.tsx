import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
   experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className="flex flex-col relative h-screen overflow-hidden text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
         <h3 className="absolute top-24 uppercase tracking-[20px] text-[#787775] text-2xl">
            Experience
         </h3>

         <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#D8C3A5]/50 scrollbar-thumb-[#E85A4F]/40">
            {experiences.map((experience) => (
               <ExperienceCard key={experience._id} experience={experience} />
            ))}{" "}
         </div>
      </motion.div>
   );
};

export default WorkExperience;
