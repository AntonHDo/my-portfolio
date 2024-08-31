import React from "react";

const Hero = () => {
  return (
    <section className="flex relative flex-col justify-center w-full h-auto text-6xl text-center bg-slate-200 text-slate-200 max-md:max-w-full max-md:text-4xl">
      <div className="flex relative flex-col px-16 pt-72 pb-56 w-full min-h-[720px] max-md:px-5 max-md:max-w-full max-md:text-6xl">
        <div className="z-10 pb-6">Anton Designs</div>
        <div className="z-10 text-4xl max-md:text-3xl">UX / UI • Developer</div>
      </div>
      <div className="absolute bottom-0 left-0 pl-8 z-10 text-xl max-md:mb-0 max-md:pl-2">
        Based In San Jose California
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcc6a532c4863b573e9ebd6f3118954d64fd323022fdf7b03eff961065892a6d?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61"
        alt="Hero Image"
        className="object-cover absolute inset-0 size-full"
      />
    </section>
  );
};

export default Hero;
