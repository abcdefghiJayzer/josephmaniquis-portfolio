import { useState, useEffect, useCallback } from "react";

export default function NavBar({ homeRef, aboutRef, projectsRef, contactRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (ref, section) => {
    const navbarHeight = document.querySelector("nav").offsetHeight; // Get the height of the navbar
    const targetPosition =
      ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight; // Adjust position
    window.scrollTo({ top: targetPosition, behavior: "smooth" }); // Smooth scroll to adjusted position
    setActiveSection(section);
    if (isOpen) toggleMenu();
  };

  const handleScroll = useCallback(() => {
    const sections = [
      { ref: homeRef, id: "home" },
      { ref: aboutRef, id: "about" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ];

    const navbarHeight = document.querySelector("nav").offsetHeight;
    const viewportHeight = window.innerHeight;
    const tolerance = 1 * viewportHeight; 

    sections.forEach(({ ref, id }) => {
      const rect = ref.current.getBoundingClientRect();
      const sectionMidPoint = rect.top + rect.height / 2;

      if (
        sectionMidPoint - navbarHeight >= 0 &&
        sectionMidPoint - navbarHeight <= tolerance
      ) {
        setActiveSection(id);
      }
    });
  }, [homeRef, aboutRef, projectsRef, contactRef]); // Add dependencies for refs

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  

  return (
    <nav className="top-0 z-50 sticky bg-neutral-950 px-5">
      <div className="flex flex-wrap justify-between items-center mx-auto pt-4 pb-2 max-w-screen-xl">
        <a className="flex items-center">
          <span className="md:block hidden font-semibold text-2xl text-white whitespace-nowrap self-center">
            Joseph Maniquis
          </span>
          <span className="block md:hidden font-semibold text-2xl text-white whitespace-nowrap self-center">
            JM
          </span>
        </a>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex justify-center items-center md:hidden p-2 text-white hover:text-gray-300 focus:outline-none transition-all"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${isOpen ? "absolute top-full left-0 right-0 bg-gray-100 z-20" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="flex md:flex-row flex-col md:space-x-8 rtl:space-x-reverse md:border-0 bg-neutral-950 md:mt-0 p-4 md:p-0 font-medium w-full">
            <li>
              <button
                onClick={() => scrollToSection(homeRef, "home")}
                className={`block ${activeSection === "home" ? "bg-neutral-400 md:bg-transparent md:text-white" : "text-neutral-700"} px-3 py-2 md:p-0 rounded text-neutral-700 w-full text-left`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(aboutRef, "about")}
                className={`block ${activeSection === "about" ? "bg-neutral-400 md:bg-transparent md:text-white" : "text-neutral-700"} px-3 py-2 md:p-0 rounded text-neutral-700 w-full text-left`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(projectsRef, "projects")}
                className={`block ${activeSection === "projects" ? "bg-neutral-400 md:bg-transparent md:text-white" : "text-neutral-700"} px-3 py-2 md:p-0 rounded text-neutral-700 w-full text-left`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(contactRef, "contact")}
                className={`block ${activeSection === "contact" ? "bg-neutral-400 md:bg-transparent md:text-white" : "text-neutral-700"} px-3 py-2 md:p-0 rounded text-neutral-700 w-full text-left`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
