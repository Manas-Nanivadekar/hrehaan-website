"use client";
 
import React, {useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion";

const ibSubjects = [
  {
    name: "Physics",
    color: "bg-blue-500/20 border-blue-500/50",
    icon: "⚛️"
  },
  {
    name: "Math AA HL",
    color: "bg-green-500/20 border-green-500/50",
    icon: "📐"
  },
  {
    name: "Economics",
    color: "bg-yellow-500/20 border-yellow-500/50",
    icon: "💰"
  },
  {
    name: "Psychology",
    color: "bg-purple-500/20 border-purple-500/50",
    icon: "🧠"
  },
  {
    name: "Spanish",
    color: "bg-red-500/20 border-red-500/50",
    icon: "🇪🇸"
  },
  {
    name: "Language & Literature",
    color: "bg-pink-500/20 border-pink-500/50",
    icon: "📖"
  }
];

const collegeAdmissionsTips = [
  {
    title: "UCAS Statement of Purpose",
    description: "Tips and guidelines for writing compelling UCAS personal statements",
    link: "#",
    category: "Essays"
  },
  {
    title: "Portfolio Preparation",
    description: "How to create a standout portfolio for creative programs",
    link: "#",
    category: "Portfolio"
  },
  {
    title: "Recommended Readings",
    description: "Essential books and resources for college preparation",
    link: "#",
    category: "Resources"
  }
];

const toolsAndDownloads = [
  {
    name: "IB Study Planner Template",
    type: "PDF",
    description: "A comprehensive planner to organize your IB studies",
    downloadLink: "#"
  },
  {
    name: "UCAS SOP Template",
    type: "DOCX",
    description: "Template structure for your UCAS personal statement",
    downloadLink: "#"
  }
];

const cardVariants = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0}
};

const IBResources = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <section className="text-white mt-4 lg:mt-6" id="resources">
      <div className="py-6 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <h2 className="text-4xl md:text-5xl font-bold accentColor mb-6 md:mb-8">
          - ib & college resources
        </h2>

        {/* IB Resources Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">IB Resources</h3>
          <p className="text-white/80 mb-8 max-w-2xl">
            Comprehensive study materials, notes, and video resources organized by subject.
            Click on any subject to access topic-wise notes, YouTube videos, and additional resources.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ibSubjects.map((subject, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{duration: 0.3, delay: index * 0.1}}
                className={`border rounded-lg p-6 text-center cursor-pointer hover:scale-105 transition-transform ${subject.color}`}
                onClick={() => setSelectedSubject(subject.name)}
              >
                <div className="text-4xl mb-2">{subject.icon}</div>
                <h4 className="text-white font-semibold">{subject.name}</h4>
              </motion.div>
            ))}
          </div>

          {selectedSubject && (
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              className="mt-8 border border-white/20 rounded-lg p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-2xl font-bold text-white">{selectedSubject} Resources</h4>
                <button
                  onClick={() => setSelectedSubject(null)}
                  className="text-white/60 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href="#"
                  className="border border-white/20 rounded-lg p-4 hover:border-tertiaryColor transition-colors"
                >
                  <div className="text-2xl mb-2">📝</div>
                  <h5 className="text-white font-semibold mb-1">Topic Notes</h5>
                  <p className="text-white/60 text-sm">Comprehensive notes by topic</p>
                </Link>
                <Link
                  href="#videos"
                  className="border border-white/20 rounded-lg p-4 hover:border-tertiaryColor transition-colors"
                >
                  <div className="text-2xl mb-2">📺</div>
                  <h5 className="text-white font-semibold mb-1">Video Tutorials</h5>
                  <p className="text-white/60 text-sm">YouTube study videos</p>
                </Link>
                <Link
                  href="#"
                  className="border border-white/20 rounded-lg p-4 hover:border-tertiaryColor transition-colors"
                >
                  <div className="text-2xl mb-2">📚</div>
                  <h5 className="text-white font-semibold mb-1">Study Materials</h5>
                  <p className="text-white/60 text-sm">Additional resources</p>
                </Link>
              </div>
            </motion.div>
          )}
        </div>

        {/* College Admissions Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">College Admissions</h3>
          <p className="text-white/80 mb-8 max-w-2xl">
            Tips, guides, and resources to help you navigate the college admissions process.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {collegeAdmissionsTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{duration: 0.3, delay: index * 0.2}}
                className="border border-white/20 rounded-lg p-6 hover:border-tertiaryColor transition-colors"
              >
                <span className="text-xs text-tertiaryColor bg-tertiaryColor/20 px-2 py-1 rounded mb-3 inline-block">
                  {tip.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">{tip.title}</h4>
                <p className="text-white/80 mb-4 text-sm">{tip.description}</p>
                <Link
                  href={tip.link}
                  className="text-tertiaryColor hover:underline text-sm"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Downloads Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-6">Tools & Downloads</h3>
          <p className="text-white/80 mb-8 max-w-2xl">
            Ready-to-use templates, planners, and downloadable resources to support your studies.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {toolsAndDownloads.map((tool, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{duration: 0.3, delay: index * 0.2}}
                className="border border-white/20 rounded-lg p-6 hover:border-tertiaryColor transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{tool.name}</h4>
                    <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
                      {tool.type}
                    </span>
                  </div>
                </div>
                <p className="text-white/80 mb-4 text-sm">{tool.description}</p>
                <Link
                  href={tool.downloadLink}
                  className="inline-block px-4 py-2 bg-tertiaryColor text-white rounded hover:opacity-90 transition-opacity text-sm"
                >
                  Download
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IBResources;

