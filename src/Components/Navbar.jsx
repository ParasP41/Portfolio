import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar({ handlerScroll, homeRef, aboutRef,resumeRef, contactRef, workRef }) {
    const [nav, setNav] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [size, setSize] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Hide when scrolling down
            }
            else if (window.scrollY == 0) {
                setShowNavbar(true);
            }
            else {
                setShowNavbar(true); // Show when scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const toggleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        if (window.innerWidth > 770) {
            setSize(true)
        }
        else {
            setSize(false)
        }
    }, [])

    return (
        <>
            <div className={size && `fixed top-0 w-full text-white transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}>


                <div className='bg-black border border-gray-700 h-[80px] md:w-auto md:px-26 text-gray-400 flex items-center justify-between'>
                    <h1 className='md:text-4xl text-3xl font-bold primary-color ml-4'><a href="/">Portfolio</a></h1>
                    <ul className='hidden md:flex'>
                        <li onClick={() => handlerScroll(homeRef)} className='p-8 hover:underline cursor-pointer hover:underline-offset-3 text-md font-semibold'>
                            Home
                        </li>
                        <li onClick={() => handlerScroll(aboutRef)} className='p-8 cursor-pointer hover:underline hover:underline-offset-3 text-md font-semibold'>
                            About me
                        </li>
                        <li onClick={() => handlerScroll(resumeRef)} className='p-8 cursor-pointer hover:underline hover:underline-offset-3 text-md font-semibold'>
                            Resume
                        </li>
                        <li onClick={() => handlerScroll(workRef)} className='p-8 hover:underline hover:underline-offset-3 cursor-pointer text-md font-semibold'>
                            Work
                        </li>
                        <li onClick={() => handlerScroll(contactRef)} className='p-8 hover:underline hover:underline-offset-3 cursor-pointer text-md font-semibold'>
                            Contact Me
                        </li>
                    </ul>
                    {/* <div onClick={toggleNav} className='block mr-6 md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-gray-900 ease-in-out duration-500' : 'fixed left-[100%]'}>
                    <h1 className='text-3xl primary-color m-4'>Portfolio</h1>
                    <ul className='p-8 text-2xl'>
                        <li className='p-2'><a>Home</a></li>
                        <li className='p-2' onClick={() => handlerScroll(aboutRef)}><a>About</a></li>
                        <li className='p-2'><a>Work</a></li>
                        <li className='p-2'><a>Contact Me</a></li>
                    </ul>
                </div> */}
                </div>
            </div>

        </>
    );
}



