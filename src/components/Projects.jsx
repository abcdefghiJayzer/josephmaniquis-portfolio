import vid1 from "./../assets/vid1.mp4";
import vid2 from "./../assets/vid2.mp4";
import vid3 from "./../assets/vid3.mp4";
import vid4 from "./../assets/vid4.mp4";
import img1 from "./../assets/7.png";
import "./../css/projects.css";

function Projects() {
  return (
    <div className="relative py-20 lg:pb-80">
      <div className="flex justify-center pb-10">
        <h1 className="text-white text-5xl">Projects</h1>
      </div>
      <div className="flex justify-center px-2 ">
        <div className="max-w-screen-lg flex overflow-x-auto space-x-4 px-4 py-10 no_scrollbar">
          {/* Each project card */}
          <div className="flex-shrink-0 w-64 md:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-200">
            <div className="bg-cover bg-center">
              <video
                src={vid1}
                autoPlay
                loop
                muted
                className="w-full h-auto"
              ></video>
            </div>
            <div className="px-6 pt-8 pb-8">
              <div className="font-bold text-2xl py-4">Cat Website</div>
              <p className="text-gray-700 text-base text-justify">
                A personal project website made for my cat. It showcases my cat
                Nini. The site aims to capture the joy she brings to my life and
                share it with fellow cat lovers.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-64 md:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-200">
            <div className="bg-cover bg-center">
              <video
                src={vid4}
                autoPlay
                loop
                muted
                className="w-full h-auto"
              ></video>
            </div>
            <div className="px-6 pt-8 md:pb-20">
              <div className="font-bold text-2xl py-4">MBTC Website</div>
              <p className="text-gray-700 text-base">
                A capstone project that aims to create a booking website for van
                rental cooperative and manage their system for a more efficient
                work flow.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-64 md:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-200">
            <div className="bg-cover bg-center">
              <video
                src={vid2}
                autoPlay
                loop
                muted
                className="w-full h-auto"
              ></video>
            </div>
            <div className="px-6 pt-8 pb-8">
              <div className="font-bold text-2xl py-4">Pizza.co</div>
              <p className="text-gray-700 text-base">
                A website for a pizza business. Equipped with the business' menu
                and branch locator.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-64 md:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-200">
            <div className="bg-cover bg-center">
              <video
                src={vid3}
                autoPlay
                loop
                muted
                className="w-full h-auto"
              ></video>
            </div>
            <div className="px-6 pt-8 pb-8">
              <div className="font-bold text-2xl py-4">Portfolio 2.0</div>
              <p className="text-gray-700 text-base">
                A portfolio website project. Made with HTML, CSS, and
                Javascript. This website showcases my skills and projects in web
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block bottom-0 transform absolute w-full bg-neutral-900 text-neutral-900"><h1>.</h1></div>


      {/* Wrapper for image and other content */}
      <div className="hidden lg:block absolute bottom-0 left-1/2 transform mt-10">
        <img src={img1} alt="Description of image" className="" /> 
        
      </div>
    </div>
  );
}

export default Projects;
