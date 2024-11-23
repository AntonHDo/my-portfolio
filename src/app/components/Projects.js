"use client";
import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { useDarkMode } from "../hooks/DarkModeContext";
const Projects = () => {
  const { isDarkMode } = useDarkMode();
  const projectList = [
    {
      id: 1,
      title: "Olana Adoptions",
      imageSrc: "/assets/OlanaHero.png",
      href: "/projects/olanaadoptions",
    },
    {
      id: 2,
      title: "Petsy",
      imageSrc: "/assets/petsyimagev2.png",
      href: "/projects/petsy",
    },
    // Add more projects as needed
  ];

  useEffect(() => {
    const handleResize = () => {
      const firstCard = document.querySelector(".project-card");
      if (firstCard) {
        setCardHeight(`${firstCard.offsetHeight}px`);
      }
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize); // Recalculate on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, [projectList]);

  return (
    <section
      id="projects"
      className={`${isDarkMode ? "bg-slate-800" : "bg-slate-200"} h-full flex relative flex-col justify-center items-center pt-20 w-full max-md:px-5 max-md:max-w-full`}
    >
      <div className={`${isDarkMode ? "bg-slate-800 text-slate-200" : "bg-slate-200 text-slate-800"} w-full h-full flex justify-center items-center text-5xl font-bold px-10s max-md:px-5 max-md:max-w-full`}>
        Projects
      </div>
      <div className="flex flex-col md:flex-row justify-center h-full items-start px-16 pt-20 max-md:pt-20 max-md:max-w-full">
        {projectList.map((project, index) => (
          // <Link href="/projects/olanaadoptions">
          <ProjectItem
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            href={project.href}
            className="project-card h-full" // Add class for height calculation
          />
          // </Link>
        ))}
      </div>
    </section>

  );
};

export default Projects;
