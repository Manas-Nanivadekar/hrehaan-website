"use client";
import React from "react";
import Card from "./Card";
import {motion} from "framer-motion";

const workData = [
  {
    title: "IISc Bangalore",
    role: "Research Intern",
    content:
      "Working on ASR for Indic Languages and Diffusion models"
  },
  {
    title: "Brainfloss",
    role: "Cloud Engineer",
    content:
      "Designed and implemented a multi-tier serverless application serving thousands of users monthly, ensuring high availability and scalability. Led a backend team to adopt serverless architecture, reducing operational overhead. Developed robust CI/CD and data pipelines to streamline workflows and optimize data processing. Strategically managed cloud resources, achieving a 44% cost reduction."
  },
  {
    title: "Bovem Wealth",
    role: "Cloud Engineer",
    content:
      "Designed and deployed a complete system for a private equity firm using AWS services like EC2, Kinesis, and API Gateway to enhance efficiency and data processing. Implemented infrastructure with AWS CloudFormation for consistency and scalability. Led the migration from on-premises to AWS, reducing latency by 36% and accelerating strategy execution. Optimized data management, achieving a 15% reduction in storage costs."
  },
  {
    title: "Zubi Infotech",
    role: "Full Stack Developer",
    content:
      "Redesigned the user interface with ReactJS for a modern, responsive experience, boosting engagement. Incorporated user feedback to implement intuitive design improvements. Developed detailed wireframes and mockups for clear communication and streamlined workflows. Worked with cross-functional teams to ensure seamless frontend integration. Optimized performance through code refactoring and asset management, cutting load times by 20%."
  },
  {
    title: "Blockology",
    role: "Full Stack Developer",
    content:
      "Designed a scalable Substrate-based blockchain architecture and initiated a decentralized peer-to-peer freelancing marketplace. Optimized transaction speed from 2-5 minutes to ~1 minute using Substrate and Rust, improving efficiency. Worked closely with stakeholders to align technical solutions with business goals."
  },
  {
    title: "Enroot NGO",
    role: "Full Stack Developer",
    content:
      "Enhanced digital presence for local climate activists, boosting engagement through targeted strategies. Developed a website for one of India’s largest LGBTQ communities, fostering inclusivity. Partnered with a U.S.-based NGO to build a mobile app and lead Google Ads campaigns, increasing outreach and user acquisition."
  }
];

const cardVariants = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0}
};

const Work = () => {
  return (
    <section className="lg:mt-8" id="work">
      <div className="min-h-screen">
        <h1 className="text-5xl font-bold accentColor mt-20 mb-4 md:mb-6">
          - work
        </h1>
        <ul>
          {workData.map((item, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{duration: 0.3, delay: index * 0.4}}
              className="mb-6"
            >
              <Card
                title={item.title}
                role={item.role}
                content={item.content}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
