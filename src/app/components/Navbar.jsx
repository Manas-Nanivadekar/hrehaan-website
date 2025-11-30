"use client";
import Link from "next/link";
import React, {useState} from "react";
import NavLink from "./NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Writing & Research",
    path: "#writing-research"
  },
  {
    title: "Resources",
    path: "#resources"
  },
  {
    title: "Videos",
    path: "#videos"
  },
  {
    title: "Blog",
    path: "#blog"
  },
  {
    title: "Resume",
    path: "#resume"
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className="fixed mx-auto top-0 left-0 right-0 z-10 secondaryColor bg-opacity-100"
      id="navbar"
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-10 py-2">
        <Link href={"/"} className="text-4xl md:text-4xl font-bold">
          <span className="text-tertiaryColor">-</span>
          <span className="text-white">h</span>
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  target={link.title === "Resume" ? "_blank" : undefined}
                  rel={
                    link.title === "Resume" ? "noopener noreferrer" : undefined
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
