import aboutImg from "./../assets/1.1.png";

function About() {
  return (
    <div className="bg-neutral-900 py-20">
      <div className="mx-auto max-w-screen-lg text-white px-0">
        <div className="flex justify-center pb-10">
          <h1 className="text-5xl">About</h1>
        </div>
        <div className="flex h-full">
          <div className="flex-1 hidden md:block pr-10 lg:pr-8">
            <img src={aboutImg} alt="a guy sitting using his laptop" className="pr-20 pl-8" />
          </div>
          <div className="flex flex-1 items-center ">
            <p className="text-justify indent-10 px-4">
              Hello! I’m a Senior Information Technology student with a strong
              interest in web development. I enjoy building dynamic and
              user-friendly applications using technologies like PHP, ReactJs,
              JavaScript, Laravel, Tailwind CSS, and Bootstrap. My passion lies
              in creating efficient, user-friendly applications that solve
              real-world problems. I'm eager to learn, improve my skills, and make
              a positive impact in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
