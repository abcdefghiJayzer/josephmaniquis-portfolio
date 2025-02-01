import img1 from "./../assets/6.png";
import img2 from "./../assets/6.1.png";
import React from "react";
import "./../css/Home.css";

function Home() {
  return (
    <div className="mx-auto max-w-screen-xl text-white pt-32 md:pt-10 ">
      <div className="flex md:flex-row flex-col px-5 lg:px-28 pt-10 h-full items-center">
        <div className="flex-grow pb-10 md:pb-20 ">
          <div class="sign font-extrabold pb-2">
            <h1 className="text-7xl md:text-9xl ">
              <span class=" fast-flicker">H</span>
              <span class="">e</span>
              <span class="flicker">l</span>
              <span class=" faster-flicker">l</span>
              <span class=" slow-flicker">o</span>!
            </h1>
          </div>

          <h1 className="pb-4 font-semibold text-4xl md:text-5xl">
            I'm Joseph!
          </h1>
          <h1 className="text-1xl">
            I'm a web developer student, diving into the world of code and
            creativity.
          </h1>
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
