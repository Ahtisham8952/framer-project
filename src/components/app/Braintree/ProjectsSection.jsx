import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const ProjectsSection = () => {
  const RelatedProjects = [
    {
      heading: "100M Delivered Successful Projects",
      Description:
        "Elevating Success Through a Track Record of Successful Projects.",
    },
    {
      heading: "10+ Years of Mastery and Expertise",
      Description:
        "Over a decade of proven expertise, shaping quality with every project.",
    },
    {
      heading: "25+ Strong Team Members",
      Description:
        "Fueled by a vibrant team of experienced professionals, driving success.",
    },
    {
      heading: "Thriving with 100+ Happy Clients",
      Description: "Enriching Journeys with Our Satisfied Clients",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(0);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  return (
    <>
      <Box>
        <Box h="1px" bg="#E4E4E4" w="100%"></Box>
        <Box>
          <Grid
            mt="30px"
            px="100px"
            mb="30px"
            gap="110px"
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            w="100%"
          >
            {RelatedProjects?.map((product, index) => (
              <Box
              cursor={"pointer"}
                key={index}
                position="relative"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Box
                     position="absolute"
                     top="-46px"
                   
                     borderRadius="50%"
                     color="white"
                     h="30px"
                     w="30px"
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                  
                   
                >
             {index === hoveredIndex ? (
    <Image src="/secondimg.svg" alt="Second Image" />
  ) : (
    <Image src="/firstimg.svg" alt="First Image" />
  )}
                </Box>
                <Text
                    fontWeight="500"
                    fontSize={{
                      base: "18px",
                      md: "18px",
                      lg: "20px",
                      xl: "22px",
                    }}
                    lineHeight="150%"
                    sx={index === hoveredIndex ? { background: "linear-gradient(to right, #E97522 0%, #1EA3B1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } : {}}
                    color={index === hoveredIndex ? "transparent" : "#000"}
                >
                  {product.heading}
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={{
                    base: "12px",
                    md: "14px",
                    lg: "16px",
                    xl: "16px",
                  }}
                  lineHeight="150%"
                  color="#7B7A7A"
                >
                  {product.Description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsSection;
