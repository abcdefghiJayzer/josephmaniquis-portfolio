import img1 from "./../assets/6.png";
import img2 from "./../assets/6.1.png";
import React, { useRef } from "react";
import "./../css/Home.css";

function Home({ contactRef }) {
  const scrollToSection = (ref) => {
    if (ref.current) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const targetPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl text-white pt-32 md:pt-10">
      <div className="flex md:flex-row flex-col px-5 lg:px-28 pt-10 h-full items-center">
        <div className="flex-grow pb-10 md:pb-20">
          <div className="sign font-extrabold pb-2">
            <h1 className="text-7xl md:text-9xl">
              <span className="fast-flicker">H</span>
              <span>e</span>
              <span className="flicker">l</span>
              <span className="faster-flicker">l</span>
              <span className="slow-flicker">o</span>!
            </h1>
          </div>

          <h1 className="pb-4 font-semibold text-4xl md:text-5xl">
            I'm Joseph!
          </h1>
          <h1 className="text-1xl pb-8">
            I'm a web developer student, diving into the world of code and
            creativity.
          </h1>

          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#eb8a16] via-[#bfb6b7] to-[#6a3e09] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              onClick={() => scrollToSection(contactRef)} // Ensure this is working
              title="Let's work together!"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-neutral-900 duration-1000 hover:bg-orange-600 font-pj rounded-xl"
            >
              Let's work together!
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-end h-full">
          <img
            src={img1}
            alt="random"
            className="md:hidden mx-auto w-2/3 max-w-sm"
          />
          <img
            src={img2}
            alt="random"
            className="md:block hidden max-h-[calc(100vh-150px)] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
