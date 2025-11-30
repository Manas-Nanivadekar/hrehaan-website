"use client";

import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {motion, AnimatePresence} from "framer-motion";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Services (EC2, S3, RDS, etc)</li>
        <li>Infrastructure as Code (Terraform)</li>
        <li>Programming Languages (Go, Rust, Python, JavaScript)</li>
        <li>Shell Scripting (Bash, Powershell)</li>
        <li>CI/CD (AWS CodePipeline, AWS CodeBuild, Jenkins)</li>
        <li>Presentation Skills</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IIT Madras, Tamil Nadu</li>
        <li>Mumbai University</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Authorised Instructor - AAI</li>
        <li>AWS Certified Security - Specialty</li>
        <li>AWS Certified SysOps Administrator - Associate</li>
        <li>AWS Certified Solution Architect - Associate</li>
        <li>AWS Certified Data Engineer - Associate</li>
        <li>AWS Certified Developer - Associate</li>
      </ul>
    )
  }
];

const contentVariants = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -20}
};

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white lg:mt-8" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/manas-google.jpeg" alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold accentColor mt-4 mb-4 md:mb-6">
            - about
          </h2>
          <p className="text-base lg:text-lg">
            Experienced Cloud Developer with 5 years of experience in creating
            and deploying scalable and secure cloud applications. <br />
            ● Experienced in AWS and GCP <br />
            ● Specialized in serverless <br />
            ● Capable of handling client interactions <br />
            ● Expert in DevOps <br />
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default About;
