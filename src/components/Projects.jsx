import "./../css/projects.css";
import pizzahtml from "./../assets/pizzahtml.mp4";
import linktechtalk from "./../assets/linktech.mp4";
import pizzaco from "./../assets/pizzaco.mp4";
import mbtc from "./../assets/mbtc.mp4";
import tracker from "./../assets/tracker.mp4";

function Projects() {
  const projects = [
    {
      video: mbtc,
      title: "MBTC Car Rental System",
      description:
        "A user-friendly, responsive car rental platform with seamless booking management and intuitive admin controls for efficient operations.",
      link: "https://manibelatransport.com/", // YouTube link
      github: "https://github.com/abcdefghiJayzer/capstone2.2", // GitHub link
      tags: ["Laravel", "MySQL", "Tailwind", "JavaScript", "API"], // Flair tags
    },
    {
      video: pizzaco,
      title: "Pizza.co",
      description:
        "A pizza website built with Laravel, featuring CRUD functionality for menu management.",
      github: "https://github.com/abcdefghiJayzer/pizza.co", // GitHub link
      tags: ["Laravel", "MySQL", "Tailwind", "JavaScript", "API"], // Flair tags
    },
    {
      video: linktechtalk,
      title: "LinkTechTalk Blog",
      description:
        "A mobile-responsive tech blog where users can read, comment, and engage with posts, while admins manage content seamlessly.",
      link: "", // No YouTube link
      github: "https://github.com/abcdefghiJayzer/LinkTechTalk", // GitHub link
      tags: ["Laravel", "MySQL", "Tailwind", "JavaScript", "API"], // Flair tags
    },
    {
      video: pizzahtml,
      title: "Pizza.co - Web Design",
      description:
        "A fully responsive static website crafted with vanilla HTML and CSS.",
      link: "https://pizza-co-html.netlify.app/",
      github: "https://github.com/abcdefghiJayzer/pizza.co-HTML", // GitHub link
      tags: ["HTML", "CSS", "JavaScript"], // Flair tags
    },
    {
      video: tracker,
      title: "Employee Tracker System",
      description:
        "A simple Laravel-based system for tracking employee details, with features for managing records efficiently.",
      link: "", // No YouTube link
      github: "https://github.com/abcdefghiJayzer/employeeTracker", // GitHub link
      tags: ["Laravel", "MySQL", "JavaScript", "Bootstrap"], // Flair tags
    },
  ];

  const tagColors = {
    HTML: "bg-neutral-400",
    CSS: "bg-cyan-300",
    Tailwind: "bg-blue-300",
    Laravel: "bg-red-700",
    MySQL: "bg-black",
    React: "bg-cyan-500",
    JavaScript: "bg-orange-500",
    API: "bg-green-700",
    Bootstrap: "bg-purple-600",
  };

  return (
    <div className="relative z-10 bg-neutral-100 py-20 md:py-32">
      <div className="mx-auto max-w-screen-xl text-black px-4 md:px-12">
        <div className="flex flex-col lg:flex-row mx-auto text-center py-10 justify-center items-center">
          <h1 className="text-6xl text-neutral-900 uppercase font-bold">
            Projects /
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-8 text-left">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              {/* Prioritize website link, fallback to GitHub if not available */}
              <a
                href={project.link ? project.link : project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="overflow-hidden rounded-lg">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      className="w-full h-[250px] md:h-[320px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[100px] object-contain transition-transform duration-100 ease-in-out group-hover:scale-110"
                    />
                  )}
                </div>
              </a>

              <div className="mt-4 flex flex-wrap space-x-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`text-xs font-semibold text-white ${tagColors[tag]} px-3 py-1 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-row justify-between text-left w-full">
                <h2 className="text-2xl font-bold text-neutral-900 uppercase text-left">
                  {project.title}
                </h2>

                <div className="flex space-x-6 pl-10">
                  {/* External Link Icon (if available) */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-neutral-900"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square  text-2xl"></i>
                    </a>
                  )}

                  {/* GitHub Icon */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-neutral-900"
                  >
                    <i className="fa-brands fa-github text-2xl"></i>
                  </a>
                </div>
              </div>

              <p className="text-base text-neutral-700 mt-2 pb-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
