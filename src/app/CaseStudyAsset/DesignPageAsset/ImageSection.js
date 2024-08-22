import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ImageSection({ title, description, imageContent }) {
  return (
    <Box
      component="section"
      className="flex flex-col px-6 mt-24 w-full min-h-[240px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <Box className="flex flex-wrap justify-between w-full min-h-[120px] max-md:max-w-full">
        <Typography
          variant="h3"
          component="h3"
          className="flex-1 shrink gap-2.5 self-stretch py-4 my-auto text-4xl font-bold min-w-[240px] w-[400px]"
        >
          {title}
        </Typography>
        <Box className="flex flex-col justify-center text-3xl text-center min-w-[240px] w-[1135px] max-md:max-w-full">
          <Typography className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full">
            {description}
          </Typography>
        </Box>
      </Box>
      <Box className="flex flex-1 justify-between text-4xl font-bold size-full max-md:max-w-full">
        <Box className="flex-1 shrink gap-2.5 self-stretch py-4 min-w-[240px] size-full max-md:max-w-full">
          {imageContent}
        </Box>
      </Box>
    </Box>
  );
}

export default ImageSection;