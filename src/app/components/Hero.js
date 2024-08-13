import React from 'react';

const Hero = () => {
  return (
    <section className="flex relative flex-col justify-center w-full text-9xl text-center bg-white text-stone-50 max-md:max-w-full max-md:text-4xl">
      <div className="flex relative flex-col px-16 pt-72 pb-56 w-full min-h-[720px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
      <div className="z-10">Anton Designs</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcc6a532c4863b573e9ebd6f3118954d64fd323022fdf7b03eff961065892a6d?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61" alt="" className="object-cover absolute inset-0 size-full" />
      </div>
    </section>
  );
};

export default Hero;