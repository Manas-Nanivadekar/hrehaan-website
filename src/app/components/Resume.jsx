"use client";

import React from "react";
import Link from "next/link";

const Resume = () => {
  return (
    <section className="text-white mt-4 lg:mt-6" id="resume">
      <div className="py-6 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <h2 className="text-4xl md:text-5xl font-bold accentColor mb-6 md:mb-8">
          - resume
        </h2>

        {/* Highlights Summary */}
        <div className="mb-8 border border-white/20 rounded-lg p-6 bg-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Education
              </h4>
              <p className="text-white/80 text-sm">
                IB Diploma Student
                <br />
                Neev Academy
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Key Projects
              </h4>
              <p className="text-white/80 text-sm">
                Author: Happy Hearts
                <br />
                Founder: StudySphere
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Skills</h4>
              <p className="text-white/80 text-sm">
                Research • Content Creation
                <br />
                Data Analysis • Communication
              </p>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="border border-white/20 rounded-lg overflow-hidden mb-6">
          <div className="bg-white/5 p-4 border-b border-white/20 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">Resume Preview</h3>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-tertiaryColor text-white rounded hover:opacity-90 transition-opacity text-sm"
            >
              Open in New Tab
            </Link>
          </div>
          <div className="aspect-[8.5/11] bg-white">
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              title="Resume Preview"
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <Link
            href="/resume.pdf"
            download
            className="inline-block px-8 py-3 bg-tertiaryColor text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Download Resume (PDF)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resume;
