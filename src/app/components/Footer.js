import React from 'react';

const Footer = () => {
  return (
    <footer className="flex relative flex-col items-center mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <div className="shrink-0 max-w-full h-1.5 bg-stone-50 bg-opacity-70 w-[996px]" />
      <h2 className="mt-24 text-4xl text-center text-white border-white border-opacity-50 tracking-[2px] max-md:mt-10 max-md:max-w-full">
        Stay Connected With Me!
      </h2>
      <div className="flex gap-5 justify-center items-start pt-20">
        <a href="#" aria-label="LinkedIn">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/722db9d5068146866e79d930f697a5a6576ba7df4b890faa695a798ff208ec32?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61" alt="" className="shrink-0 aspect-square w-[70px]" />
        </a>
        <a href="#" aria-label="GitHub">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b41bea0c94d04b20871630ef5737036afe847c18e8eaa3672e861ebb7146b0f?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61" alt="" className="shrink-0 aspect-[1.03] w-[70px]" />
        </a>
      </div>
      <p className="w-full text-base tracking-wider text-right text-white max-md:max-w-full">
        Created by Anton Do
      </p>
    </footer>
  );
};

export default Footer;