import React from 'react';
import SectionTitle from './Section Title';

const Projects = () => {
  return (
    <section id="projects" className="flex relative flex-col px-14 pt-16 pb-12 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
        <SectionTitle title="Projects" />
      </div>
      <div className="flex flex-col justify-center items-start px-16 py-14 mt-12 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a55c10e65bee59e9d0a81b735a6f021ce92e626c2af11f5cc808edc28418bcee?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61" alt="Project showcase" className="max-w-full aspect-[1.08] w-[608px]" />
      </div>
    </section>
  );
};

export default Projects;