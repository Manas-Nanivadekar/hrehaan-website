"use client";
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion} from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Automated Multi-Cloud deployment",
    description:
      "This tool is engineered to support predefined technology stacks alongside the capability to generate bespoke Terraform code. Terraforge distinguishes itself by operating within your infrastructure, ensuring unparalleled transparency and control over your deployment operations.",
    image: "/multicloud.png",
    tag: ["All", "Cloud"],
    gitUrl: "https://github.com/Manas-Nanivadekar/Terraforge",
    previewUrl: "https://github.com/Manas-Nanivadekar/Terraforge"
  },
  {
    id: 2,
    title: "Multi-Cloud Observibility Tool",
    description:
      "This tool simplifies the process of monitoring and managing applications across multiple clouds. It provides a unified view of your applications, enabling you to identify and resolve issues quickly.",
    image: "/observibility.png",
    tag: ["All", "Cloud"],
    gitUrl:
      "https://www.google.com/search?q=Multi-Cloud+Observibility+Tool&sourceid=chrome&ie=UTF-8",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Cross Border Payment",
    description:
      "This project is a full-stack application that enables users to send and receive money across borders using blockchain technology. It provides a secure and transparent way to transfer money globally.",
    image: "/crossborder.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/Manas-Nanivadekar/nexus-inspired-mono-repo",
    previewUrl: "/"
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = newTag => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter(project =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1}
  };

  return (
    <section className="lg:mt-8" id="projects">
      <h2 className="text-5xl font-bold accentColor mt-4 mb-4 md:mb-6">
        - projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cloud"
          isSelected={tag === "Cloud"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{duration: 0.3, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
