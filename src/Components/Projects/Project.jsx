import React from 'react';
import ProjectCard from './ProjectCard';
import userFinder from '../../assets/userFinder.jpg';
import ecomImg from '../../assets/ecomImg.jpeg';
import portImg from '../../assets/portImg.jpg';
import tngImg from '../../assets/tngImg.jpg';
import sigmaImg from '../../assets/sigmaImg.jpg';
import truewebtechImg from '../../assets/truewebtechImg.jpg';

const Project = () => {
  return (
    <section
      id='Projects'
      className='p-10 md:p-24 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white'
    >
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-10 md:p-16">
        <h1 className='text-3xl md:text-5xl font-bold text-center mb-14 text-blue-400'>
          Projects
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
          <ProjectCard
            title="Portfolio Website"
            main="Personal portfolio site using React and Tailwind CSS to showcase projects, skills, and contact form with email integration."
            img={portImg}
            demoLink="https://portfolio-mohit-sharma.vercel.app/"
            sourceLink="https://github.com/starmohit14/Mohit-Portfolio"
          />
          <ProjectCard
            title="GitHub User Finder"
            main="React-based GitHub User Finder app that uses GitHub’s API to search for developers and display profile data in real-time."
            img={userFinder}
            demoLink="https://starmohit14.github.io/GitHub-User-Finder/"
            sourceLink="https://github.com/starmohit14/GitHub-User-Finder"
          />
          <ProjectCard
            title="E-Commerce Dashboard"
            main="Created a responsive admin dashboard using React, Chart.js & Tailwind for managing products, orders, and analytics."
            img={ecomImg}
            demoLink="#"
            sourceLink="#"
          />
          <ProjectCard
            title="The Noble Group Services"
            main="At The Noble Group Services, we prioritize your well-being in everything we do. We offer personalized guidance, care, and solutions tailored to your NDIS needs."
            img={tngImg}
            demoLink="https://tngservices.com.au/"
          />
          <ProjectCard
            title="SigmaCrew Digital"
            main="A MERN stack project that enables patients to book appointments with doctors, featuring authentication and admin control."
            img={sigmaImg}
            demoLink="https://sigmacrewdigital.com"
          />
          <ProjectCard
            title="TrueWebTech"
            main="We’ve been delivering reliable digital solutions for over four decades. From startups to enterprises, our expertise helps businesses thrive in a competitive world!"
            img={truewebtechImg}
            demoLink="https://truewebtech.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
