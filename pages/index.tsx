import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Home: NextPage = () => {
   return (
      <div className="bg-[#EAE7DC] text-[#8E8D8A] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-[#D8C3A5]/50 scrollbar-thumb-[#E85A4F]/40">
         <Head>
            <title>Ahmed Amer</title>
         </Head>

         {/* Header */}
         <Header />

         {/* Hero  */}
         <section id="hero" className="snap-start">
            <Hero />
         </section>

         {/* About */}
         <section id="about" className="snap-center">
            <About />
         </section>

         {/* Experiences */}
         <section id="experience" className="snap-center">
            <WorkExperience />
         </section>

         {/* Skills */}
         <section id="skills" className="snap-start">
            <Skills />
         </section>

         {/* Projects */}
         <section id="projects" className="snap-start">
            <Projects />
         </section>

         {/* Contact Me */}
         <section id="contact" className="snap-start">
            <ContactMe />
         </section>

         <Link href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
               <div className="flex items-center justify-center">
                  <ArrowUpIcon className="text-[#E85A4F] h-10 w-10 rounded-full filter grayscale hover:grayscale-0" />
               </div>
            </footer>
         </Link>
      </div>
   );
};

export default Home;
