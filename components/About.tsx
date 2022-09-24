import React from "react";

type Props = {};

const About = (props: Props) => {
   return (
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-[#787775] text-2xl">
            About
         </h3>
      </div>
   );
};

export default About;
