import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex flex-col max-w-full w-full">
      <h2 className="self-center text-8xl text-center border-slate-200 border-opacity-50 text-slate-200 tracking-[4.8px] max-md:text-4xl ">
        {title}
      </h2>
      <div className="flex justify-center items-center py-3 max-md:px-5 max-md:max-w-full">
        <div className="shrink-0 h-1.5 bg-zinc-300 w-[478px] max-md:w-[203px] " />
      </div>
    </div>
  );
};

export default SectionTitle;
