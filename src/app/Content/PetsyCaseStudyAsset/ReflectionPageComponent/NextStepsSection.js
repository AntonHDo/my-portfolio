// import React from "react";
// import { Box, Typography } from "@mui/material";

// const NextStepsSection = ({ title, content }) => (
//   <Box
//     component="section"
//     className="flex flex-wrap justify-center items-start px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
//   >
//     <Typography
//       variant="h2"
//       className="grow shrink gap-2.5 self-stretch py-4 w-80 text-4xl font-bold min-w-[240px]"
//     >
//       {title}
//     </Typography>
//     <Box className="flex flex-col grow shrink min-w-[240px] w-[1055px] max-md:max-w-full">
//       <Box className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full">
//         <Box className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
//           <Typography
//             variant="h3"
//             className="text-3xl text-center max-md:max-w-full"
//           >
//             {content.subtitle}
//           </Typography>
//           <Typography
//             variant="body1"
//             className="mt-3 text-2xl max-md:max-w-full"
//           >
//             {content.description}
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   </Box>
// );

// export default NextStepsSection;

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function NextStepsSection({ title }) {
  return (
    <Box
      component="header"
      className="gap-2.5 self-stretch py-4 min-w-[240px] w-[400px]"
    >
      <Typography variant="h4" component="h1" className="font-bold">
        {title}
      </Typography>
    </Box>
  );
}

export default NextStepsSection;
