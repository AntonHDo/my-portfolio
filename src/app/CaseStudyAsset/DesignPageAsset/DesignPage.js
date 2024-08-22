import React from 'react';
import SectionHeader from './SectionHeader';
import ContentSection from './ContentSection';
import ImageSection from './ImageSection';
import Box from '@mui/material/Box';

function DesignPage() {
  return (
    <Box
      component="main"
      className="flex flex-col self-center mt-24 w-full text-slate-200 max-w-[1583px] max-md:mt-10 max-md:max-w-full"
    >
      <SectionHeader title="Design" content="Designing a way to solve the problem" />
      <ContentSection title="Concept" content="A webapp that helps people find their new best friend" />
      <ContentSection 
        title="Key Features" 
        content="More descriptionsMore descriptMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore" 
      />
      <ImageSection 
        title="Site Map" 
        description="Description of the project" 
        imageContent="Image of Site Map" 
      />
      <ImageSection 
        title="Lofi Wireframes" 
        description="Description of the project" 
        imageContent="Image of Lofi Wireframe" 
      />
      <ImageSection 
        title="Design System" 
        description="Showcase the designs and components, icons, etc" 
        imageContent="Image of all the different design systems" 
      />
    </Box>
  );
}

export default DesignPage;
