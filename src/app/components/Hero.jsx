"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="max-w-4xl"
        >
          <h1 className="text-white poppins-bold mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-white">Hrehaan</span>
          </h1>
          <p className="text-[#ADB7BE] text-lg sm:text-xl mb-6 lg:text-2xl poppins-medium">
            Student | Researcher | Creator
          </p>
          
          {/* Short About Me Summary */}
          <p className="text-white text-base sm:text-lg mb-8 lg:text-xl max-w-2xl mx-auto">
            IB Diploma student passionate about learning, research, and creating content that makes complex concepts accessible.
          </p>

          {/* Quick Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm sm:text-base">
            <span className="text-white border border-white/20 px-4 py-2 rounded-full">
              IB Diploma Student
            </span>
            <span className="text-white border border-white/20 px-4 py-2 rounded-full">
              Author of Helping Hands, Loving Hearts
            </span>
            <span className="text-white border border-white/20 px-4 py-2 rounded-full">
              Founder of StudySphere
            </span>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Link
              href="#writing-research"
              className="px-8 py-3 inline-block rounded-lg bg-tertiaryColor text-white hover:opacity-90 transition-opacity poppins-medium text-lg"
            >
              Explore My Work
            </Link>
          </div>

          {/* Visual Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link
              href="#writing-research"
              className="flex flex-col items-center p-6 border border-white/20 rounded-lg hover:border-tertiaryColor transition-colors group"
            >
              <div className="text-4xl mb-2">📚</div>
              <span className="text-white group-hover:text-tertiaryColor transition-colors">Books</span>
            </Link>
            <Link
              href="#writing-research"
              className="flex flex-col items-center p-6 border border-white/20 rounded-lg hover:border-tertiaryColor transition-colors group"
            >
              <div className="text-4xl mb-2">🔬</div>
              <span className="text-white group-hover:text-tertiaryColor transition-colors">Research</span>
            </Link>
            <Link
              href="#videos"
              className="flex flex-col items-center p-6 border border-white/20 rounded-lg hover:border-tertiaryColor transition-colors group"
            >
              <div className="text-4xl mb-2">📺</div>
              <span className="text-white group-hover:text-tertiaryColor transition-colors">YouTube</span>
            </Link>
            <Link
              href="#blog"
              className="flex flex-col items-center p-6 border border-white/20 rounded-lg hover:border-tertiaryColor transition-colors group"
            >
              <div className="text-4xl mb-2">✍️</div>
              <span className="text-white group-hover:text-tertiaryColor transition-colors">Blog</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
