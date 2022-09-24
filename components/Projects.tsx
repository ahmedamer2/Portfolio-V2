import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
   const projects = [1, 2, 3, 4, 5];
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className="relative h-screen flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
         <h3 className="absolute top-24 uppercase tracking-[20px] text-[#787775] text-2xl">
            Projects
         </h3>
         <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-[#D8C3A5]/50 scrollbar-thumb-[#E85A4F]/40 scrollbar-thin">
            {projects.map((project, index) => (
               <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                  <motion.img
                     initial={{ opacity: 0, y: -300 }}
                     transition={{ duration: 1.2 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     src="movie_app.png"
                     alt=""
                     className="w-[150px] h-[150px] object-cover md:w-[300px] md:h-[300px]"
                  />

                  <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                     <h4 className="text-2xl font-semibold text-center md:text-4xl">
                        <span className="underline decoration-[#E85A4F]/50">
                           Case Study {index + 1} of {projects.length}:
                        </span>{" "}
                        movie app
                     </h4>

                     <p className="text-xs text-center md:text-left md:text-lg">
                        The Movie Ticket Purchasing app simulates an app used to
                        book movie tickets. Eventhough the app is simple as it
                        does not have many movies it has enough to represent an
                        actual app that a movie theater would use for ticketing.
                        It features functionalities such as being able to
                        register a new account, login in to those accounts, and
                        pay for movies just how you would in any other movie
                        ticketing app. Eventhough the app is not complete it was
                        written using OOP standards and can be easily expanded
                        without having to change any old code written.
                     </p>
                  </div>
               </div>
            ))}
         </div>
         <div className="w-full absolute top-[30%] bg-[#E85A4F]/20 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
   );
};

export default Projects;
