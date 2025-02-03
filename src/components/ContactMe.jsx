import React from "react";
import "./../css/ContactMe.css";
import ContactForm from "../javascript/ContactForm";

class ContactMe extends React.Component {
  render() {
    return (
      <div className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-screen-xl bg-neutral-900 container mx-auto px-6 md:px-12 text-white">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-9xl text-left font-bold mb-4">
              Let's <span className="text-orange-500">Work</span> Together!
            </h2>
            <p className="text-2xl md:text-4xl text-neutral-400 text-left md:py-4">
              Hit me up and i'll getback to you.
            </p>
          </div>

          {/* Social Icons and Contact Form Section */}
          <div className="flex flex-col flex-1 lg:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
            {/* Social Media Icons */}
            <div className="">
              <div className="flex flex-1 justify-left items-center md:w-1/4">
                <a
                  href="https://www.linkedin.com/in/joseph-maniquis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <i className="fa-brands fa-linkedin fa-2x pr-12"></i>
                </a>
                <a
                  href="https://github.com/abcdefghiJayzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <i className="fa-brands fa-github fa-2x pr-12"></i>
                </a>
                <a
                  href="https://www.instagram.com/abcdefghijayzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-pink-800 transition-colors duration-300"
                >
                  <i className="fa-brands fa-instagram fa-2x pr-12"></i>
                </a>

                <a
                  href="/Jayzer-Joseph-Maniquis-Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-orange-400 transition-colors duration-300"
                >
                  <i class="fa-solid fa-file-arrow-down fa-2x pr-6"></i>
                </a>

                <p className="text-xs italic font-bold">Download Resume</p>
              </div>

              <div className="flex flex-col items-center space-x-10 pt-10">
                <div className="text-[15px] font-light text-left w-full italic ">
                  P.S. Hire me or frame my resume—either way, it’s a great
                  download!{" "}
                </div>
                
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="px-2 mx-auto rounded-lg md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
