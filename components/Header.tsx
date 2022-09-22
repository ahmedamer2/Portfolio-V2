import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
   return (
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
         <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center"
         >
            <SocialIcon
               url="https://www.linkedin.com/in/ahmed-amer-1339371bb/"
               bgColor="transparent"
               fgColor="#D8C3A5"
               className="cursor-pointer"
            />
            <SocialIcon
               url="https://github.com/ahmedamer2"
               bgColor="transparent"
               fgColor="#D8C3A5"
               className="cursor-pointer"
            />
         </motion.div>

         <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center cursor-pointer text-[#D8C3A5]"
         >
            <SocialIcon
               network="email"
               bgColor="transparent"
               fgColor="#D8C3A5"
               className="cursor-pointer"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-[#D8C3A5]">
               Get in touch
            </p>
         </motion.div>
      </header>
   );
};

export default Header;
