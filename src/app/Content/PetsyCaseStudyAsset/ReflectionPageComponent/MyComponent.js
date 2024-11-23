import React from "react";
import ReflectionSection from "./ReflectionSection";
import NextStepsSection from "./NextStepsSection";
import SectionHeader from "../DesignPageAsset/SectionHeader";
import ContentSection from "../DesignPageAsset/ContentSection";
import { Box } from "@mui/material";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

const MyComponent = () => {
  const { isDarkMode } = useDarkMode();
  const sections = [
    {
      title: "Relection",
      content: (
        <Box>
          Designing with a user-focused mindset that enhances the shopping
          experience for pet owners is essential.
          <br />
          <br />
          In my work on the Petsy project, I realized the critical importance of
          understanding users' challenges when shopping for their pets. It’s not
          just about offering a wide range of products; it’s about creating an
          intuitive, trustworthy, and enjoyable shopping experience. This
          project reinforced the value of a user-centered approach, ensuring
          that Petsy becomes a reliable and welcoming destination where pet
          owners can confidently find the right products for their beloved pets.{" "}
        </Box>
      ),
    },
    {
      title: "Next Steps",
      content: (
        <Box className="mb-20">
          <ul className="list-disc">
            <li>
              Larger selection of pets - Have a larger variety of pets along
              with more experts on those anaimals to bring in a larger diversed
              group of users.
            </li>
            <li>
              Gamify with reward system - Allow users to be able to earn rewards
              when purchasing products. These rewards can be coupons or
              products.
            </li>
          </ul>
        </Box>
      ),
    },
  ];

  //   const reflectionContent = {
  //     subtitle:
  //       "Designing with a user-centered approach that prioritizes the needs and experiences of potential adopters is crucial.",
  //     description:
  //       "My Olana Adoptions project highlighted the importance of truly understanding the users' needs in creating a meaningful and effective adoption platform. It's not just about listing available dogs; it's about making the adoption process smooth, accessible, and responsive for every user. This journey reaffirmed that a user-centered approach is essential, ensuring that Olana Adoptions is a valuable resource for connecting dogs with their future families.",
  //   };

  //   const nextStepsContent = {
  //     subtitle:
  //       "In the future, my focus will be on expanding the capabilities of Olana Adoptions to enhance the overall adoption experience for users.",
  //     description: (
  //       <Box>
  //         <ul className="list-disc">
  //           <li>
  //             Real-time chat support - enables potential adopters to get immediate
  //             responses to their inquiries and assistance throughout the adoption
  //             process.
  //           </li>
  //           <li>
  //             Advanced search filters - allows users to find the perfect dog based
  //             on specific criteria like age, breed, and temperament.
  //           </li>
  //           <li>
  //             Personalized adoption recommendations - provides users with tailored
  //             suggestions based on their preferences and lifestyle, making the
  //             adoption process even more seamless and user-friendly.
  //           </li>
  //         </ul>
  //       </Box>
  //     ),
  //   };

  return (
    <Box
      component="main"
      className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} flex flex-col self-center mt-20 w-full max-w-[1583px] max-md:mt-10 max-md:max-w-full`}
    >
      {sections.map((section, index) => (
        <Box
          key={index}
          component="section"
          className={`flex flex-wrap ${index > 0 ? "mt-20 max-md:mt-10" : ""
            } w-full`}
        >
          <SectionHeader title={section.title} />
          <ContentSection content={section.content} />
        </Box>
      ))}
    </Box>
  );
};

export default MyComponent;
