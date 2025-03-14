"use client"
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HomePage from "./components/Homepage";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import Skills from "./components/SkillsPage";
import { GithubCalender } from "./components/GithubCalender";
import GeminiEffect from "./components/GeminiEffect";
// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const rotateIn = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0 },
};

export default function HeroHighlightDemo() {
  return (
    <>
      {/* Static Navbar */}
      <Navbar />
      <HomePage />
      
      {/* Projects Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        
      </motion.div>

      {/* Work Experience Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <WorkExperience />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleUp}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Skills />
      </motion.div>

      {/* GitHub Calendar Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={rotateIn}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <GithubCalender />
        <Projects />
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <GeminiEffect />
        <ContactForm />
      </motion.div>
    </>
  );
}
