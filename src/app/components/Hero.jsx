"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white poppins-bold mb-4 text-xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br></br>
            {/* <TypeAnimation
              sequence={[
                "Manas Nanivadekar.",
                2000,
                "Cloud Developer.",
                1000,
                "Google DSC Lead.",
                1000,
                "Postman Leader.",
                1000,
                "Full Stack Developer.",
                1000
              ]}
              wrapper="span"
              // speed={50}
              // repeat={Infinity}
              className="accentColor"
            /> */}
            <span className="accentColor">Manas Nanivadekar</span>.
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate developer crafting solutions for real-world challenges.
          </p>
          <div>
            {/* <Link
              href="/#contact"
              className="px-6 inline-block py-10 w-full sm:w-fit mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover: text-white"
            >
              Download CV
            </Link> */}
            <Link
              href="mailto:contact@manasnanivadekar.me"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#EB0028] rounded-full px-5 py-2">
                Get in Touch
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="flex flex-row gap-3 p-2 md:hidden">
            <Link href="https://x.com/nanivadekar_m">
              <Image
                className="h-8 w-8 hover:scale-110 cursor-pointer"
                src="/X.png"
                alt=""
                height={32}
                width={32}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/manas-nanivadekar/">
              <Image
                className="h-8 w-8 hover:scale-110 cursor-pointer"
                src="/in.png"
                alt=""
                height={32}
                width={32}
              />
            </Link>
            <Link href="https://github.com/Manas-Nanivadekar/">
              <Image
                className="h-8 w-8 hover:scale-110 cursor-pointer"
                src="/Github.png"
                alt=""
                height={32}
                width={32}
              />
            </Link>
            <Link href="mailto:contact@manasnanivadekar.me">
              <Image
                className="h-8 w-8 hover:scale-110 cursor-pointer"
                src="/Google.png"
                alt=""
                height={32}
                width={32}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
