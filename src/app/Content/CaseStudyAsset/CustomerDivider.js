'use client';
import React from "react";
import Divider from "@mui/material/Divider";

function CustomDivider() {
  return (
    <Divider
      className="flex w-full bg-zinc-300 min-h-[2px] max-md:max-w-full"
      role="separator"
      aria-hidden="true"
    />
  );
}

export default CustomDivider;
