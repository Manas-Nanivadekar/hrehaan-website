"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

const booksData = [
  {
    title: "Helping Hands, Loving Hearts",
    cover: "/book-cover-placeholder.jpg", // Replace with actual cover image
    summary: "A heartfelt exploration of compassion and community service.",
    amazonLink: "#" // Add actual Amazon link
  }
];

const researchData = [
  {
    title: "Research Paper Title",
    abstract: "Brief abstract of your research paper. This section will contain the main findings and contributions of your work.",
    link: "#", // Link to paper/PDF
    pdfLink: "#" // Direct PDF link if available
  }
];

const futureProjects = [
  {
    title: "Upcoming Book Project",
    description: "A new book exploring [topic]",
    status: "Coming Soon"
  }
];

const cardVariants = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0}
};

const WritingResearch = () => {
  return (
    <section className="text-white mt-4 lg:mt-6" id="writing-research">
      <div className="py-6 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <h2 className="text-4xl md:text-5xl font-bold accentColor mb-6 md:mb-8">
          - writing & research
        </h2>

        {/* Books Section */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Books</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksData.map((book, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{duration: 0.3, delay: index * 0.2}}
                className="border border-white/20 rounded-lg overflow-hidden hover:border-tertiaryColor transition-colors"
              >
                <div className="aspect-[2/3] relative bg-white/5">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{book.title}</h4>
                  <p className="text-white/80 mb-4 text-sm">{book.summary}</p>
                  <Link
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-tertiaryColor text-white rounded hover:opacity-90 transition-opacity"
                  >
                    View on Amazon
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Papers Section */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Research Papers</h3>
          <div className="space-y-6">
            {researchData.map((paper, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{duration: 0.3, delay: index * 0.2}}
                className="border border-white/20 rounded-lg p-6 hover:border-tertiaryColor transition-colors"
              >
                <h4 className="text-2xl font-bold text-white mb-3">{paper.title}</h4>
                <p className="text-white/80 mb-4 leading-relaxed">{paper.abstract}</p>
                <div className="flex gap-4">
                  {paper.link && (
                    <Link
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiaryColor hover:underline"
                    >
                      Read Paper →
                    </Link>
                  )}
                  {paper.pdfLink && (
                    <Link
                      href={paper.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiaryColor hover:underline"
                    >
                      Download PDF →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Projects Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-6">Coming Soon</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {futureProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{duration: 0.3, delay: index * 0.2}}
                className="border border-white/20 rounded-lg p-6 hover:border-tertiaryColor transition-colors opacity-60"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <span className="text-xs text-tertiaryColor bg-tertiaryColor/20 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-white/60">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingResearch;

