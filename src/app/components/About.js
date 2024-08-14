import React from "react";
import SectionTitle from "./Section Title";

const About = () => {
  return (
    <section
      id="about"
      className="flex relative flex-col items-center mt-20 w-full max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
        <SectionTitle title="About Me" />
      </div>
      <div className="flex justify-center items-center px-12 py-2 w-full max-md:px-10 max-md:max-w-full">
        <div className="mt-20 mb-12 w-full max-w-[1292px] max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <ul className="self-stretch pr-14 pl-12 my-auto text-3xl leading-10 text-stone-50 list-disc max-md:pr-8 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <li>
                  Graduated from San Jose State University with a BA in
                  Linguistics
                </li>
                <li>Completed App Academy Full Stack Boot Camp</li>
                <li>Fell in love with Web Design and UX/UI Design</li>
                <li>Rock Climbing is my outlet</li>
                <li>Lifelong Learner</li>
              </ul>
            </div>
            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52133dfd1efa519799efdf954e4120884ed284dcfff107e08bb85b847b52839f?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61"
                alt="Anton Do"
                className="grow w-full aspect-[0.82] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
