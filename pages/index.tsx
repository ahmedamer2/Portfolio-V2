import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
   return (
      <div className="bg-[#EAE7DC] text-[#8E8D8A] h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
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
      </div>
   );
};

export default Home;
