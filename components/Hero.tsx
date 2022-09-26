import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
   pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
   const [text, count] = useTypewriter({
      words: [
         `Hi, I am ${pageInfo?.name ?? "Ahmed Amer"}`,
         "A guy who loves learning",
         "<ButLovesCodingMore />"
      ],
      loop: true,
      delaySpeed: 2000
   });
   return (
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
         <BackgroundCircles />
         <div className="relative rounded-full mx-auto h-32 w-32 object-cover">
            <Image
               src={urlFor(pageInfo?.heroImage)?.url()}
               width={128}
               height={128}
               style={{ borderRadius: "50%" }}
               objectFit="cover"
            />
         </div>
         <div className="z-20">
            <h2 className="text-xs md:text-sm uppercase text-[#c7c3be] pb-2 tracking-[15px]">
               {pageInfo?.role}
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
               <span className="text-[#787775] mr-3">{text}</span>
               <Cursor cursorColor="#E98074" />
            </h1>
            <div className="pt-5">
               <Link href="#about">
                  <button className="heroButton">About</button>
               </Link>
               <Link href="#experience">
                  <button className="heroButton">Experience</button>
               </Link>
               <Link href="#skills">
                  <button className="heroButton">Skills</button>
               </Link>
               <Link href="#projects">
                  <button className="heroButton">Projects</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Hero;
