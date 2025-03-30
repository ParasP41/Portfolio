import React from 'react';
import profilepic from '../assets/profilepic.png';
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import resume from '../Files/Resume.pdf';

export default function Hero({ ref }) {
  return (
    <div ref={ref} className="grid md:mx-7 md:my-13 grid-cols-1 sm:grid-cols-3 gap-8 md:h-screen md:py-30 bg-black">
      {/* Profile Picture */}
      <div className="col-span-1 my-10 md:my-0 w-60 lg:w-[400px] mx-auto">
        <img src={profilepic} alt="Profile" className="rounded-full" />
      </div>

      {/* Hero Text Section */}
      <div className="col-span-2 md:px-20 px-5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <p className="primary-color">I am</p>
          <span className="md:text-7xl">Paras Vishwakarma</span>
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-2xl leading-relaxed">
          A <span className="primary-color">Web Developer</span> passionate about crafting seamless, high-performance, and visually stunning web experiences. With expertise in <span className="primary-color">React, Tailwind, and modern web technologies</span>, I specialize in building responsive, user-friendly, and dynamic applications. From sleek <span className="primary-color">UI designs to optimized backend solutions</span>, I bring ideas to life with clean code and creativity. Let's build something amazing together!
        </p>

        {/* Resume Download Button */}
        <div className="my-8">
          <a href={resume} download="Paras_Resume.pdf" className="px-6 py-3 font-bold rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white inline-block">
            Download Resume
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center items-center  md:my8">
        <div className="flex items-center space-x-9 p-3 border border-white rounded-xl text-white">
          <a href="https://www.linkedin.com/in/parasp41/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl">
            <BsLinkedin size={30} />
            <span className="primary-color">LinkedIn</span>
          </a>
          <a href="https://github.com/ParasP41" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl">
            <FaGithubSquare size={30} />
            <span className="primary-color">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
