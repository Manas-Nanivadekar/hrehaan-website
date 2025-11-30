"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const videoCategories = ["All", "Physics", "Math", "Economics", "Psychology"];

const videosData = [
  {
    id: 1,
    title: "IB Physics Topic 1: Measurements",
    thumbnail: "/video-thumbnail-placeholder.jpg", // Replace with actual thumbnail
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    category: "Physics",
    description: "Understanding measurements and uncertainties in IB Physics"
  },
  {
    id: 2,
    title: "Math AA HL: Calculus Basics",
    thumbnail: "/video-thumbnail-placeholder.jpg",
    youtubeId: "dQw4w9WgXcQ",
    category: "Math",
    description: "Introduction to calculus concepts for Math AA HL"
  },
  {
    id: 3,
    title: "Economics: Market Structures",
    thumbnail: "/video-thumbnail-placeholder.jpg",
    youtubeId: "dQw4w9WgXcQ",
    category: "Economics",
    description: "Exploring different market structures in IB Economics"
  },
  {
    id: 4,
    title: "Psychology: Cognitive Approaches",
    thumbnail: "/video-thumbnail-placeholder.jpg",
    youtubeId: "dQw4w9WgXcQ",
    category: "Psychology",
    description: "Understanding cognitive approaches to behavior"
  }
  // Add more videos as needed
];

const cardVariants = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0}
};

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const filteredVideos =
    selectedCategory === "All"
      ? videosData
      : videosData.filter(video => video.category === selectedCategory);

  return (
    <section className="text-white lg:mt-8" id="videos">
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mb-8">
          <h2 className="text-5xl font-bold accentColor mt-4 mb-4">
            - videos
          </h2>
          <p className="text-xl text-white/80 mb-2">
            Simplifying IB concepts one topic at a time.
          </p>
          <p className="text-white/60 text-sm mb-6">
            StudySphere YouTube Channel
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {videoCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-tertiaryColor text-white"
                  : "border border-white/20 text-white/80 hover:border-tertiaryColor hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{duration: 0.3, delay: index * 0.1}}
              className="border border-white/20 rounded-lg overflow-hidden hover:border-tertiaryColor transition-colors group"
            >
              <Link
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video relative bg-white/5 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-tertiaryColor transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {video.description}
                  </p>
                  <span className="inline-block mt-2 text-xs text-tertiaryColor bg-tertiaryColor/20 px-2 py-1 rounded">
                    {video.category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* YouTube Channel Link */}
        <div className="mt-12 text-center">
          <Link
            href="https://www.youtube.com/@studysphere" // Replace with actual channel URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            Visit StudySphere Channel →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Videos;

