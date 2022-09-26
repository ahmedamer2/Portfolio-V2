import type { GetStaticProps, NextPage } from "next";
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
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExpereinces";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchScials } from "../utils/fetchSocials";

type Props = {
   pageInfo: PageInfo;
   experiences: Experience[];
   skills: Skill[];
   projects: Project[];
   socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
   return (
      <div className="bg-[#EAE7DC] text-[#8E8D8A] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-[#D8C3A5]/50 scrollbar-thumb-[#E85A4F]/40">
         <Head>
            <title>Ahmed Amer</title>
         </Head>

         {/* Header */}
         <Header socials={socials} />

         {/* Hero  */}
         <section id="hero" className="snap-start">
            <Hero pageInfo={pageInfo} />
         </section>

         {/* About */}
         <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
         </section>

         {/* Experiences */}
         <section id="experience" className="snap-center">
            <WorkExperience experiences={experiences} />
         </section>

         {/* Skills */}
         <section id="skills" className="snap-start">
            <Skills skills={skills} />
         </section>

         {/* Projects */}
         <section id="projects" className="snap-start">
            <Projects projects={projects} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
   const pageInfo: PageInfo = await fetchPageInfo();
   const experiences: Experience[] = await fetchExperiences();
   const skills: Skill[] = await fetchSkills();
   const projects: Project[] = await fetchProjects();
   const socials: Social[] = await fetchScials();

   return {
      props: {
         pageInfo,
         experiences,
         skills,
         projects,
         socials
      },
      revalidate: 60
   };
};
