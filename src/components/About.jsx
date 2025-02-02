import React from "react";
import "./../css/about.css";

function About() {
  return (
    <div className="relative">
      <div className="z-10 bg-neutral-50 py-32 md:py-56">
        <div className="mx-auto max-w-screen-lg text-white px-0">
          <div className="flex flex-col lg:flex-row px-8 md:px-20">
            <div className="flex flex-[1] justify-left pb-20">
              <h1 className="text-sm text-neutral-500 uppercase">About /</h1>
            </div>
            <div className="flex flex-[2] items-center text-xl lg:text-xl text-neutral-700 flex-col">
              <p className="text-justify font-normal pb-10">
                I am a Senior Information Technology student at Central Luzon
                State University. My academic journey revolves around mastering
                software development and system design while delving into
                emerging technologies.
              </p>

              <p className="text-justify font-normal pb-10">
                I’m driven by challenging projects that allow for dynamic
                problem-solving and self-guided research. Whether I’m building
                or breaking things, I enjoy finding creative solutions that push
                boundaries. I pay strong attention to detail, I focus on
                delivering efficient, user-friendly solutions. I'm particularly
                passionate about UI/UX design and integrating creative elements
                into my work
              </p>

              <p className="text-justify font-normal pb-10">
                This is my personal space, where I showcase my work, projects,
                and insights on web development and design.
              </p>
              <div className="my-2 flex justify-between w-full">
                <h1 className="text-sm text-neutral-600">Start</h1>
                <h1 className="text-sm text-neutral-600">Completion</h1>
              </div>
              <div className="progress">
                <div className="progress-value"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
