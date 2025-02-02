import React from "react";
import "./../css/skills.css";
import "./../css/projects.css";

function Skills() {
  return (
    <div className="relative z-10 bg-neutral-950 py-32 md:py-44">
      <div className="mx-auto max-w-screen-lg text-white md:px-0">
        <div className="flex flex-col lg:flex-row px-8 md:px-20">
          <div className="flex flex-1 justify-between w-full pb-20">
            <h1 className="text-sm text-neutral-500 uppercase">Skills /</h1>
          </div>
        </div>

        <div className="mx-auto md:px-20 container">
          {/* Product Design Section */}
          <div className="group card flex flex-col md:flex-row items-center px-6 border-b border-neutral-500 py-16">
            <h2 className="transition-all duration-500 ease-in-out text-2xl font-light uppercase w-full md:w-1/6 md:pr-4 lg:pr-56 text-left hidden md:block">
              01
            </h2>
            <div className="flex flex-col w-full">
              <h2 className="transition-all duration-500 ease-in-out text-2xl md:text-4xl lg:text-6xl font-light text-left uppercase group-hover:text-orange-500">
                Product Design
              </h2>
              <h1 className="text-left text-sm text-neutral-500">
                Tailwind • CSS • Bootstrap • JavaScript
              </h1>
            </div>
          </div>

          {/* Development Section */}
          <div className="group card flex flex-col md:flex-row items-center px-6 border-b border-neutral-500 py-16">
            <h2 className="transition-all duration-500 ease-in-out text-2xl font-light uppercase w-full md:w-1/6 pr-0 md:pr-4 lg:pr-56 text-left hidden md:block">
              02
            </h2>
            <div className="flex flex-col w-full">
              <h2 className="transition-all duration-500 ease-in-out text-2xl md:text-4xl lg:text-6xl font-light text-left uppercase group-hover:text-orange-500">
                Development
              </h2>
              <h1 className="text-left text-md text-neutral-500">
                React • Laravel • PHP • MySQL
              </h1>
            </div>
          </div>

          {/* Tools Section */}
          <div className="group card flex flex-col md:flex-row items-center px-6 border-b border-neutral-500 py-16">
            <h2 className="transition-all duration-500 ease-in-out text-2xl font-light uppercase w-full md:w-1/6 pr-0 md:pr-4 lg:pr-56 text-left hidden md:block">
              03
            </h2>
            <div className="flex flex-col w-full">
              <h2 className="transition-all duration-500 ease-in-out text-2xl md:text-4xl lg:text-6xl font-light text-left uppercase group-hover:text-orange-500">
                Tools
              </h2>
              <h1 className="text-left text-md text-neutral-500">
                Figma • Git • GitHub • VS Code
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
