import React from 'react'
import { FaHtml5, FaJs, FaReact, FaGithub, FaGitAlt, FaJava } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";

export default function Resume({ ref }) {
  return (
    <div ref={ref} className="px-5 py-10">
      <h2 className="text-3xl md:text-4xl  font-bold text-center underline decoration-orange-500 underline-offset-8 mb-8">
        RESUME
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">

        <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl underline decoration-orange-500 underline-offset-4 mb-5">
            SOFTWARE SKILLS
          </h3>
          {[
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, value: 90 },
            { name: "CSS", icon: <IoLogoCss3 className="text-blue-500" />, value: 80 },
            { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, value: 75 },
            { name: "TailwindCSS", icon: <RiTailwindCssFill className="text-blue-400" />, value: 90 },
            { name: "React", icon: <FaReact className="text-blue-500" />, value: 88 },
            { name: "Java", icon: <FaJava className="text-red-400" />, value: 88 },
          ].map((skill, index) => (
            <div key={index} className="flex items-center gap-3 my-3">
              {skill.icon}
              <span className="text-lg md:text-xl">{skill.name}</span>
              <input type="range" value={skill.value} className="w-full h-2 bg-gray-700 rounded-lg cursor-pointer" readOnly />
            </div>
          ))}
        </div>

        <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl underline decoration-orange-500 underline-offset-4 mb-5">
            PROJECTS
          </h3>
          {[
            { title: "Climatic", description: "A real-time weather app providing instant updates and auto-location tracking." },
            { title: "iNoteBook", description: "A CRUD-based note-keeping app with dark mode and local storage." },
            { title: "Zentry", description: "A GSAP-animated interactive web experience inspired by Zentry.com." },
            { title: "Tic-Tac-Toe", description: "A simple React.js game designed as a common interview challenge." },
          ].map((project, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-xl md:text-2xl font-semibold">{project.title}:</h4>
              <p className="text-lg">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl underline decoration-orange-500 underline-offset-4 mb-5">
            EDUCATION
          </h3>
          <p className="text-lg">
            🎓 **B.Tech in Information Technology**
            Oriental Institute of Science & Technology, Bhopal (2nd Year)
          </p>
          <p className="text-lg mt-3">
            📖 **High School & Higher Secondary**
            - **10th**: Sacred Heart Convent High School (72%)
            - **12th**: All Saints Higher Secondary School (77%)
          </p>

          <h3 className="text-2xl md:text-3xl underline decoration-orange-500 underline-offset-4 mt-6 mb-5">
            TOOLS
          </h3>
          {[
            { name: "VSCode", icon: <VscVscodeInsiders className="text-blue-500" />, value: 85 },
            { name: "Git", icon: <FaGitAlt className="text-red-500" />, value: 88 },
            { name: "GitHub", icon: <FaGithub className="text-white" />, value: 79 },
            { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-gray-500" />, value: 67 },
          ].map((tool, index) => (
            <div key={index} className="flex items-center gap-3 my-3">
              {tool.icon}
              <span className="text-lg md:text-xl">{tool.name}</span>
              <input type="range" value={tool.value} className="w-full h-2 bg-gray-700 rounded-lg cursor-pointer" readOnly />
            </div>
          ))}
        </div>

        <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl underline decoration-orange-500 underline-offset-4 mb-5">
            HOBBIES & INTERESTS
          </h3>
          <ul className="list-disc pl-5 text-lg">
            <li>📚 Reading Books</li>
            <li>🎵 Listening to Music</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
