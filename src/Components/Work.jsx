import React from 'react';
import game from '../assets/game.jpg';
import weather from '../assets/weather.jpg';
import tic from '../assets/tic.jpg';
import news from '../assets/news.jpg';
import note from '../assets/note.jpg';

export default function Work({ ref }) {
    const projects = [
        { name: "Climatic - Weather App", img: weather, link: "https://climatic-ivory.vercel.app/" },
        { name: "Zentry Clone", img: game, link: "https://zentry-five-henna.vercel.app/" },
        { name: "Tic-Tac-Toe Game", img: tic, link: "https://tic-tak-toe-sable.vercel.app/" },
        { name: "Monkey App - News", img: news, link: "#" }, // Add the real link
        { name: "iNoteBook", img: note, link: "https://i-note-book-omega.vercel.app/" },
    ];

    return (
        <div ref={ref} className="p-5">
            {/* Heading */}
            <div className="pb-8 md:mx-3">
                <p className="md:text-6xl md:mx-6 text-3xl mb-3 font-bold underline decoration-orange-500 underline-offset-10 primary-color">
                    Work
                </p>
                <p className="text-2xl md:mx-5 text-white mb-3 font-bold">Check out some of my recent work</p>
            </div>

            {/* Project Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] relative ${
                            index === 0 || index === 3 ? "md:col-span-2" : ""
                        }`}
                    >
                        {/* Project Image */}
                        <img src={project.img} alt={project.name} className="object-cover w-full h-full" />

                        {/* Hover Overlay */}
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">{project.name}</span>
                            <div className="pt-8 text-center">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
