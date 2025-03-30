import React from 'react';
import aboutpic from '../assets/about.jpg';
import html from '../assets/html.png';
import react from '../assets/react.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';

export default function About({ ref }) {
    return (
        <div ref={ref} className="text-white min-h-screen md:mx-8 mx-5 md:my-6">
            {/* About Section */}
            <div className="md:grid md:grid-cols-2 sm:py-16">
                {/* Text Section */}
                <div className="mt-4 md:mt-0 text-left flex h-full">
                    <div className="my-auto md:mx-6">
                        <h2 className="md:text-5xl text-3xl font-bold mb-10 underline decoration-orange-500 underline-offset-8 primary-color">
                            About Me
                        </h2>
                        <p className="text-base lg:text-xl leading-relaxed">
                            I'm <span className="primary-color">Paras Vishwakarma</span>, a passionate <span className="primary-color">Web Developer</span> focused on building modern, responsive, and high-performance web applications.  
                            Specializing in <span className="primary-color">React.js, Tailwind CSS, and JavaScript</span>, I create seamless user experiences with clean and efficient code.
                            <br /><br />
                            I’ve worked on various projects, from <span className="primary-color">weather apps to real-time news platforms, note-keeping applications</span>, and interactive web experiences. My expertise includes intuitive UI design, performance optimization, and <span className="primary-color">API integration</span>.  
                            I enjoy experimenting with animations, micro-interactions, and scalable architectures to make every project both functional and visually engaging.
                            <br /><br />
                            Beyond coding, I’m always eager to learn, contribute to open-source, and explore <span className="primary-color">backend development</span>. I thrive on challenges that push my skills and believe in the power of technology to create impactful digital experiences.  
                            <span className="primary-color">Let’s build something amazing together!</span>
                        </p>
                    </div>
                </div>
                {/* Image Section */}
                <img
                    className="mx-auto rounded-3xl py-8 md:py-4"
                    src={aboutpic}
                    alt="Paras Vishwakarma"
                    width={350}
                    height={300}
                />
            </div>

            {/* Tech Stack Section */}
            <div className="bg-black mb-6 md:mx-7 mx-2 text-gray-400 md:h-[150px] grid grid-cols-3 place-items-center md:flex md:flex-wrap md:justify-between border rounded-xl md:items-center md:px-20">
                <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4 text-center">
                    My <br /> Tech <br /> Stack
                </h2>

                {[
                    { img: html, name: "HTML" },
                    { img: css, name: "CSS" },
                    { img: javascript, name: "JavaScript" },
                    { img: tailwind, name: "Tailwind CSS" },
                    { img: react, name: "React JS" },
                ].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
                        <img src={tech.img} alt={tech.name} />
                        <p className="mt-2">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
