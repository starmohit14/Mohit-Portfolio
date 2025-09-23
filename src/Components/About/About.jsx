import React from 'react';
import AboutImg from "../../assets/mohit-pics2.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section id='About' className="text-white px-6 py-20 md:px-24">
      <div className="bg-black bg-opacity-30 rounded-xl shadow-xl px-6 py-16 md:p-16 mx-auto max-w-7xl">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 text-blue-400 tracking-tight">
          About Me
        </h2>

        {/* Image + Description */}
        <div className="md:flex md:items-center md:justify-center gap-16 flex-wrap mb-16">
          {/* Image */}
          <div className="flex justify-center mb-10 md:mb-0">
            <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden shadow-[0_0_40px_#3b82f6] hover:shadow-[0_0_60px_white] transition duration-300">
              <img
                src={AboutImg}
                alt="Parul"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl text-sm md:text-lg text-gray-300 leading-relaxed tracking-wide text-center md:text-left">
            <p>
              Hi, I’m a passionate <strong className="text-blue-400">Frontend Developer</strong> specializing in <strong className="text-blue-300">React.js</strong>. I enjoy building modern, responsive, and user-friendly web applications that not only look great but also deliver smooth performance.
              <br /><br />
              With hands-on experience in <strong className="text-blue-300">React.js, JavaScript (ES6+), API integration, and Tailwind CSS</strong>, I focus on creating clean UI designs and writing scalable code. I’m well-versed with React Hooks, Context API, and performance optimization, which helps me deliver efficient solutions for real-world projects.
              <br /><br />
              Currently, I’m looking for opportunities where I can apply my skills, learn from industry experts, and grow as a React.js Developer while contributing to impactful projects.
              <br /><br />
              💡 Beyond coding, I love solving logical problems, exploring new technologies, and constantly improving myself as a developer.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            {
              title: "Frontend Developer",
              desc: "A Frontend Developer builds the user-facing part of websites and web applications using HTML, CSS, JavaScript, and frameworks like React Js. They focus on creating responsive, interactive, and accessible user interfaces that work across devices and browsers.",
            },
            {
              title: "ReactJS Developer",
              desc: "A ReactJS Developer specializes in building dynamic and scalable front-end applications using the React library. They manage components, hooks, state management, Redux and integrate APIs to deliver fast, responsive web experiences.",
            },
            {
              title: "WordPress Developer",
              desc: "I work with WordPress to develop custom themes and plugins, optimize site performance, and ensure seamless user experiences through responsive design and clean code.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#111827] w-80 p-6 rounded-xl shadow-md hover:shadow-[0_0_30px_#3b82f6] hover:-translate-y-1 transition-all duration-300 border border-blue-600"
            >
              <div className="flex gap-3 items-start">
                <IoArrowForward size={28} className="text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-tight text-gray-300">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
