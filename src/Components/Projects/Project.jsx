import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ecomImg from '../../assets/ecomImg.jpg';
import portImg from '../../assets/portImg.jpg';
import movieImg from '../../assets/movieImg.jpg';
import leadImg from '../../assets/leadImg.jpg';
import weatherImg from '../../assets/weatherImg.jpg';
import userFinder from '../../assets/userFinder.jpg';
import tngImg from '../../assets/tngImg.jpg';
import sigmaImg from '../../assets/sigmaImg.jpg';
import truewebtechImg from '../../assets/truewebtechImg.jpg';

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "E-Commerce Page",
      main: "A responsive e-commerce interface built with React.js & Tailwind CSS, featuring product listings, cart functionality, and smooth UI.",
      img: ecomImg,
      demoLink: "https://starmohit14.github.io/ecommerce-page/",
      sourceLink: "https://github.com/starmohit14/ecommerce-page",
      category: "React.js",
    },
    {
      title: "Portfolio Website",
      main: "Personal portfolio site using React and Tailwind CSS to showcase projects, skills, and contact form with email integration.",
      img: portImg,
      demoLink: "https://portfolio-mohit-sharma.vercel.app/",
      sourceLink: "https://github.com/starmohit14/Mohit-Portfolio",
      category: "React.js",
    },
    {
      title: "Movie Search App",
      main: "Movie database search app using React.js & API integration, allowing users to explore movies with real-time results and responsive UI.",
      img: movieImg,
      demoLink: "https://starmohit14.github.io/Movie-Search-App/",
      sourceLink: "https://github.com/starmohit14/Movie-Search-App",
      category: "React.js",
    },
    {
      title: "Lead Management Module",
      main: "A React.js module to manage leads efficiently with CRUD operations, form handling, and an intuitive UI powered by Tailwind CSS.",
      img: leadImg,
      demoLink: "https://starmohit14.github.io/Lead-Management-Module/",
      sourceLink: "https://github.com/starmohit14/Lead-Management-Module",
      category: "React.js",
    },
    {
      title: "Weather App",
      main: "Weather forecast app using React.js & OpenWeather API, providing live weather updates with a simple and attractive design.",
      img: weatherImg,
      demoLink: "https://starmohit14.github.io/Weather-App/",
      sourceLink: "https://github.com/starmohit14/Weather-App",
      category: "React.js",
    },
    {
      title: "GitHub User Finder",
      main: "A React.js application to search GitHub users and display their profile details, repositories, and stats with a clean interface.",
      img: userFinder,
      demoLink: "https://starmohit14.github.io/GitHub-User-Finder/",
      sourceLink: "https://github.com/starmohit14/GitHub-User-Finder",
      category: "React.js",
    },
    {
      title: "The Noble Group Services",
      main: "At The Noble Group Services, we prioritize your well-being in everything we do. We offer personalized guidance, care, and solutions tailored to your NDIS needs.",
      img: tngImg,
      demoLink: "https://tngservices.com.au/",
      category: "WordPress",
    },
    {
      title: "SigmaCrew Digital",
      main: "A MERN stack project that enables patients to book appointments with doctors, featuring authentication and admin control.",
      img: sigmaImg,
      demoLink: "https://sigmacrewdigital.com",
      category: "WordPress",
    },
    {
      title: "TrueWebTech",
      main: "We’ve been delivering reliable digital solutions for over four decades. From startups to enterprises, our expertise helps businesses thrive in a competitive world!",
      img: truewebtechImg,
      demoLink: "https://truewebtech.com",
      category: "WordPress",
    },
  ];

  const categories = ["All", "React.js", "WordPress"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === selectedCategory);

  return (
    <section
      id="Projects"
      className="p-10 md:p-24 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-10 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-14 text-blue-400">
          Projects
        </h1>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition 
                ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {filteredProjects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
