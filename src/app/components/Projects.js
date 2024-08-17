"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SectionTitle from "./Section Title";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [cardHeight, setCardHeight] = useState("auto");

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
      href: "/",
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
      className="flex relative flex-col px-14 pt-20 w-full max-md:px-5 max-md:max-w-full"
    >
      <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
        <SectionTitle title="Projects" />
      </div>
      <div className="flex flex-col justify-center items-start px-16 pt-20 max-md:px-5 max-md:pt-20 max-md:max-w-full">
        {projectList.map((project, index) => (
          // <Link href="/projects/olanaadoptions">
          <ProjectItem
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            href={project.href}
            height={cardHeight} // Apply consistent height
            className="project-card" // Add class for height calculation
          />
          // </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
