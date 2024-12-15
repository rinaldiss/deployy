"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "./burst-bload";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex justify-center">
        <SectionHeading>👨‍💻 About Me</SectionHeading>
        <BurstBload />
      </div>
      <p>
        Hello, my name is Rinaldi! I am a dedicated {" "}
        <span className="font-medium">Web Developer </span> I am passionate about creating user-centered 
        digital solutions, with expertise in front-end and back-end development. I focus on building functional, 
        visually appealing, and innovative web applications while continuously enhancing my skills and exploring 
        new technologies to deliver impactful digital experiences.
      </p>
    </motion.section>
  );
}
