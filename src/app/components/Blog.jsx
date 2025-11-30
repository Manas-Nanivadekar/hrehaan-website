"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

// This will fetch from Substack RSS feed
// For now, using placeholder data - you can integrate RSS feed parsing later
const fetchSubstackPosts = async () => {
  // Placeholder - replace with actual RSS feed fetching
  // Example: fetch('https://hrehaan.substack.com/feed')
  return [
    {
      title: "Latest Blog Post Title",
      excerpt: "This is a preview of your latest blog post. The full content will be available on Substack.",
      link: "https://hrehaan.substack.com/p/latest-post",
      date: "2024-01-15"
    },
    {
      title: "Another Great Article",
      excerpt: "Another insightful article about your thoughts and ideas.",
      link: "https://hrehaan.substack.com/p/another-post",
      date: "2024-01-10"
    },
    {
      title: "Thoughts on Education",
      excerpt: "Sharing perspectives on modern education and learning.",
      link: "https://hrehaan.substack.com/p/education-thoughts",
      date: "2024-01-05"
    },
    {
      title: "Research Insights",
      excerpt: "Key findings from recent research and studies.",
      link: "https://hrehaan.substack.com/p/research-insights",
      date: "2024-01-01"
    }
  ];
};

const cardVariants = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0}
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchSubstackPosts();
        setPosts(fetchedPosts.slice(0, 4)); // Show latest 4 posts
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <section className="text-white lg:mt-8" id="blog">
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mb-8">
          <h2 className="text-5xl font-bold accentColor mt-4 mb-4">
            - blog
          </h2>
          <p className="text-xl text-white/80 mb-2">
            Ideas, Insight, Impact
          </p>
          <p className="text-white/60 text-sm mb-6">
            Thoughts, research, and reflections on education, learning, and beyond
          </p>
        </div>

        {loading ? (
          <div className="text-white/60 text-center py-12">Loading posts...</div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6 mb-12" ref={ref}>
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{duration: 0.3, delay: index * 0.1}}
                  className="border border-white/20 rounded-lg p-6 hover:border-tertiaryColor transition-colors"
                >
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <span className="text-xs text-white/60 mb-2 block">
                      {formatDate(post.date)}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-tertiaryColor transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-tertiaryColor hover:underline text-sm">
                      Read More →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Substack CTA */}
            <div className="text-center border-t border-white/20 pt-12">
              <p className="text-white/80 mb-6">
                Want to read more? Check out all my articles on Substack
              </p>
              <Link
                href="https://hrehaan.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-tertiaryColor text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Read All on Substack →
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;

