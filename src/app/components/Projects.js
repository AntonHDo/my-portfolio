"use client";
import React, { useState, useEffect } from "react";
import SectionTitle from "./Section Title";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [cardHeight, setCardHeight] = useState("auto");

  const projectList = [
    {
      id: 1,
      title: "Olana Adoptions",
      imageSrc: "/assets/OlanaHero.png",
    },
    {
      id: 2,
      title: "Title project 2",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a55c10e65bee59e9d0a81b735a6f021ce92e626c2af11f5cc808edc28418bcee?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61",
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
      className="flex relative flex-col px-14 my-20 w-full max-md:px-5 max-md:max-w-full"
    >
      <div className="flex justify-center items-center pt-8 px-16 max-md:px-5 max-md:max-w-full">
        <SectionTitle title="Projects" />
      </div>
      <div className="flex flex-col justify-center items-start px-16 pt-14 mt-12 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {projectList.map((project, index) => (
          <ProjectItem
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            height={cardHeight} // Apply consistent height
            className="project-card" // Add class for height calculation
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
