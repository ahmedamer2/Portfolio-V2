import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
   experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
   return (
      <article className="flex flex-col rounded-lg items-center space-y-7 w-[500px] md:w-[600px] xl:w-[700px] snap-start bg-[#e6ddd0] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
         <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            src={urlFor(experience?.companyImage).url()}
            alt=""
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
         />
         <div className="px-0 md:px-10">
            <h4 className="text-xl md:text-3xl font-light">
               {experience?.jobTitle}
            </h4>
            <p className="font-bold text-md md:text-xl  mt-1">
               {experience?.company}
            </p>
            <div className="flex justify-center md:justify-start space-x-2 my-2">
               {experience?.technologies.map((tech) => (
                  <Image
                     key={tech._id}
                     src={urlFor(tech?.image).url()}
                     width={30}
                     height={30}
                     style={{ borderRadius: "50%" }}
                  />
               ))}
            </div>
            <p className="uppercase py-5 text-gray-400 text-sm">
               {new Date(experience.dateStarted).toDateString()} -{" "}
               {experience.isCurrentlyWorkingHere
                  ? "Present"
                  : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className="list-disc space-y-3  text-xs max-h-[300px] overflow-y-auto px-5">
               {experience?.points.map((point, index) => (
                  <li key={index} className="break-words">
                     {point}
                  </li>
               ))}
            </ul>
         </div>
      </article>
   );
};

export default ExperienceCard;
