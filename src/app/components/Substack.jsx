"use client";

import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";

const Substack = () => {
  return (
    <section className="text-white mt-4 lg:mt-6" id="substack">
      <div className="py-6 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold accentColor mb-4">
            - studysphere
          </h2>
          <p className="text-xl text-white/80 mb-2">
            Ideas, Insights, and IB Resources
          </p>
          <p className="text-white/60 text-sm mb-6">
            Thoughts, research, and reflections on education, learning, and beyond
          </p>
        </div>

        {/* Substack Embed */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="border border-white/20 rounded-lg overflow-hidden"
          style={{background: "#000000"}}
        >
          <iframe
            src="https://hrehaan.substack.com/embed?utm_source=substack&utm_medium=email&theme=dark"
            width="100%"
            height="320"
            style={{border: "none", background: "#000000", colorScheme: "dark"}}
            frameBorder="0"
            scrolling="no"
            title="Substack Posts"
          ></iframe>
        </motion.div>

        {/* Visit Substack CTA */}
        <div className="mt-8 text-center">
          <Link
            href="https://hrehaan.substack.com/t/studysphere"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-tertiaryColor text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Visit StudySphere on Substack →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Substack;
