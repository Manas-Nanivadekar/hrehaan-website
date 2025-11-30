"use client";

import React, {useTransition, useState} from "react";
import TabButton from "./TabButton";
import {motion, AnimatePresence} from "framer-motion";

const tabData = [
  {
    title: "Who I Am",
    id: "who",
    content: (
      <div className="text-base lg:text-lg text-white/80 leading-relaxed">
        <p>
          I&apos;m an IB Diploma student at Neev Academy with a passion for learning, 
          research, and making education accessible. Through my work as an author, 
          content creator, and founder of StudySphere, I strive to simplify complex 
          concepts and help students succeed. My journey combines academic rigor with 
          creative expression, always driven by curiosity and a desire to make an impact.
        </p>
      </div>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="border-l-4 border-tertiaryColor pl-4">
          <h3 className="text-xl font-bold text-white mb-2">IB Diploma</h3>
          <p className="text-white/80">Neev Academy</p>
          <p className="text-sm text-white/60">Currently pursuing</p>
        </div>
      </div>
    )
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Academic</h3>
          <ul className="list-disc pl-6 text-white/80 space-y-1">
            <li>Data Analysis</li>
            <li>Research Methodology</li>
            <li>Critical Thinking</li>
            <li>Academic Writing</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Creative</h3>
          <ul className="list-disc pl-6 text-white/80 space-y-1">
            <li>Content Creation</li>
            <li>Video Editing</li>
            <li>Communication</li>
            <li>Storytelling</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Technical</h3>
          <ul className="list-disc pl-6 text-white/80 space-y-1">
            <li>Web Development</li>
            <li>Digital Tools</li>
            <li>Presentation Design</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Certifications & Awards",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <div className="border border-white/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Author</h3>
          <p className="text-white/80">Helping Hands, Loving Hearts</p>
        </div>
        <div className="border border-white/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-2">Founder</h3>
          <p className="text-white/80">StudySphere</p>
        </div>
        {/* Add more certifications/awards as needed */}
      </div>
    )
  }
];

const timelineData = [
  {
    year: "2024",
    title: "Founder of StudySphere",
    description: "Created educational platform to help IB students"
  },
  {
    year: "2024",
    title: "Published Author",
    description: "Helping Hands, Loving Hearts"
  },
  {
    year: "2023",
    title: "IB Diploma Student",
    description: "Started IB Diploma at Neev Academy"
  }
];

const contentVariants = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -20}
};

const About = () => {
  const [tab, setTab] = useState("who");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white lg:mt-8" id="about">
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="text-5xl font-bold accentColor mt-4 mb-8 md:mb-12">
          - about me
        </h2>
        
        <div className="flex flex-row justify-start flex-wrap gap-2 mb-8">
          <TabButton
            selectTab={() => handleTabChange("who")}
            active={tab === "who"}
          >
            Who I Am
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            Certifications & Awards
          </TabButton>
        </div>

        <div className="mt-8 mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{duration: 0.3}}
            >
              {tabData.find(t => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8">Timeline</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-tertiaryColor"></div>
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-tertiaryColor border-4 border-black"></div>
                  <div className="border border-white/20 rounded-lg p-6 hover:border-tertiaryColor transition-colors">
                    <span className="text-tertiaryColor font-semibold text-sm">{item.year}</span>
                    <h4 className="text-xl font-bold text-white mt-2 mb-1">{item.title}</h4>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
