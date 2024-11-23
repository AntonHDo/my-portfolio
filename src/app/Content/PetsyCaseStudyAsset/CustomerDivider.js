import React from "react";
import Divider from "@mui/material/Divider";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function CustomDivider() {
  const { isDarkMode } = useDarkMode();
  return (
    <Divider
      className={`${isDarkMode ? "bg-slate-200" : "bg-slate-800"} flex w-full min-h-[2px] max-md:max-w-full`}
      role="separator"
      aria-hidden="true"
    />
  );
}

export default CustomDivider;
