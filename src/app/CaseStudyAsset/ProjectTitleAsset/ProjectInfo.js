import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const projectDetails = [
  { label: "Role", value: "UX / UI, Developer" },
  { label: "Team", value: "Anton" },
  { label: "Timeline", value: "3 Month" },
  { label: "Project Link", value: "Somewhere" },
];

function ProjectInfo() {
  return (
    <Box
      component="section"
      className="flex flex-col justify-center px-20 w-full text-2xl max-md:mt-10 max-md:max-w-full"
    >
      <Box className="flex flex-row flex-wrap gap-8 items-start py-6 w-full max-md:flex-col max-md:gap-3 max-md:px-5 max-md:max-w-full">
        <dl className="flex flex-col flex-1 shrink py-3 basis-0 min-w-[240px] max-md:w-full max-md:min-w-0">
          {projectDetails.map((detail, index) => (
            <React.Fragment key={index}>
              <Typography
                component="dt"
                className={
                  index > 0 ? "mt-3 max-md:max-w-full" : "max-md:max-w-full"
                }
              >
                {detail.label}
              </Typography>
              <Typography component="dd" className="sr-only">
                {detail.value}
              </Typography>
            </React.Fragment>
          ))}
        </dl>
        <dl className="flex flex-col flex-1 shrink py-3 basis-0 min-w-[240px] max-md:w-full max-md:min-w-0">
          {projectDetails.map((detail, index) => (
            <Typography
              component="dd"
              key={index}
              className={
                index > 0 ? "mt-3 max-md:max-w-full" : "max-md:max-w-full"
              }
            >
              {detail.value}
            </Typography>
          ))}
        </dl>
      </Box>
    </Box>
  );
}

export default ProjectInfo;
