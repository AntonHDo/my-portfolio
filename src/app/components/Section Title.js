import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <div className="flex flex-col max-w-full w-[858px]">
      <h2 className="self-center text-8xl text-center border-stone-50 border-opacity-50 text-stone-50 tracking-[4.8px] max-md:max-w-full max-md:text-4xl">
        {title}
      </h2>
      <div className="flex justify-center items-center px-16 py-3 max-md:px-5 max-md:max-w-full">
        <div className="shrink-0 h-1.5 bg-zinc-300 w-[179px]" />
      </div>
    </div>
  );
};

export default SectionTitle;