import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
   return (
      <div>
         <Head>
            <title>Ahmed Amer</title>
         </Head>

         {/* Header */}
         <Header />
         {/* Hero  */}
         <section id="hero">
            <Hero />
         </section>
         {/* Experiences */}

         {/* Skills */}

         {/* Projects */}

         {/* Contact Me */}
      </div>
   );
};

export default Home;
