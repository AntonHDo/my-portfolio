'use client';
import React from "react";
import { useDarkMode } from "../hooks/DarkModeContext";

const SectionTitle = ({ title }) => {
  const isDarkMode = useDarkMode();
  return (
    <div className="flex flex-col w-full">
      <h2 className={`${isDarkMode ? " text-slate-200" : " text-slate-800"} self-center text-5xl text-center max-md:text-4xl`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
