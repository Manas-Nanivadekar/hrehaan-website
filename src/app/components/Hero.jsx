"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="max-w-4xl"
        >
          <h1 className="text-white poppins-bold mb-3 text-4xl sm:text-5xl lg:text-6xl lg:leading-tight font-extrabold">
            <span className="text-white">Hrehaan</span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl poppins-medium">
            Student | Researcher | Creator
          </p>

          {/* Short About Me Summary */}
          <p className="text-white text-sm sm:text-base mb-6 lg:text-lg max-w-2xl mx-auto">
            IB Diploma student passionate about learning, research, and creating
            content that makes complex concepts accessible.
          </p>

          {/* Quick Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 text-xs sm:text-sm">
            <span className="text-white border border-white/20 px-3 py-1.5 rounded-full">
              IB Diploma Student
            </span>
            <span className="text-white border border-white/20 px-3 py-1.5 rounded-full">
              Author of Happy Hearts
            </span>
            <span className="text-white border border-white/20 px-3 py-1.5 rounded-full">
              Founder of StudySphere
            </span>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Link
              href="#writing-research"
              className="px-6 py-2.5 inline-block rounded-lg bg-tertiaryColor text-white hover:opacity-90 transition-opacity poppins-medium text-base"
            >
              Explore My Work
            </Link>
          </div>

          {/* Visual Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-4">
            <Link
              href="#writing-research"
              className="flex flex-col items-center p-4 border border-white/20 rounded-lg hover:border-tertiaryColor transition-colors group"
            >
              <div className="text-3xl mb-1">📚</div>
              <span className="text-white text-sm group-hover:text-tertiaryColor transition-colors">
                Books
              </span>
            </Link>
            <Link
              href="#writing-research"
              className="flex flex-col items-center p-4 border border-white/20 rounded-lg hover:border-tertiaryColor transition-colors group"
            >
              <div className="text-3xl mb-1">🔬</div>
              <span className="text-white text-sm group-hover:text-tertiaryColor transition-colors">
                Research
              </span>
            </Link>
            <Link
              href="#videos"
              className="flex flex-col items-center p-4 border border-white/20 rounded-lg hover:border-tertiaryColor transition-colors group"
            >
              <div className="text-3xl mb-1">📺</div>
              <span className="text-white text-sm group-hover:text-tertiaryColor transition-colors">
                YouTube
              </span>
            </Link>
            <Link
              href="#blog"
              className="flex flex-col items-center p-4 border border-white/20 rounded-lg hover:border-tertiaryColor transition-colors group"
            >
              <div className="text-3xl mb-1">✍️</div>
              <span className="text-white text-sm group-hover:text-tertiaryColor transition-colors">
                Blog
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
