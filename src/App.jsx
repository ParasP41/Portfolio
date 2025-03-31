import React, { useRef } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Work from './Components/Work'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
export default function App() {

  const handlerScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const size=window.innerWidth;

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const workRef = useRef(null);
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  return (
    <>
    <Navbar handlerScroll={handlerScroll} resumeRef={resumeRef} homeRef={homeRef} contactRef={contactRef} workRef={workRef} aboutRef={aboutRef} />
      <Hero ref={homeRef} />
      <About ref={aboutRef}/>
      <Resume ref={resumeRef}/>
      <Work ref={workRef}/>
      <Contact ref={contactRef} />
    </>
  )
}


