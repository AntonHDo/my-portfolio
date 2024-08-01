import React from 'react';
import SectionTitle from './Section Title';

const About = () => {
  return (
    <section id="about" className="flex relative flex-col items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
        <SectionTitle title="About Me" />
      </div>
      <div className="flex justify-center items-center px-12 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="mt-20 mb-12 w-full max-w-[1292px] max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <p className="self-stretch pr-14 pl-12 my-auto text-3xl leading-10 text-stone-50 max-md:pr-8 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                Graduated from San Jose State University with a BA in Linguistics <br />
                Completed App Academy Full Stack Boot Camp <br />
                Fell in love with Web Design and UX/UI Design <br />
                Rock Climbing is my outlet <br />
                Lifelong Learner
              </p>
            </div>
            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/52133dfd1efa519799efdf954e4120884ed284dcfff107e08bb85b847b52839f?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61" alt="Anton Do" className="grow w-full aspect-[0.82] max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;