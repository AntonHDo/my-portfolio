import React from "react";
import { useDarkMode } from "../hooks/DarkModeContext"; // Import the useDarkMode hook
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { Button } from "@mui/material";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the useDarkMode hook

  return (
    <Button onClick={toggleDarkMode} className={` normal-case gap-2 mr-2 flex p-2 w-full text-sm items-center justify-center ${isDarkMode ? "text-white" : "text-black"}`}>
      {isDarkMode ? (
        <LightModeTwoToneIcon />

      ) : (
        <DarkModeTwoToneIcon />
      )}
    </Button>
  );
};

export default DarkModeToggle;