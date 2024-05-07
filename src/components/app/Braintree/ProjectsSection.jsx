import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";

const ProjectsSection = () => {
    const RelatedProjects=[
        {
            heading:'100M Delivered Successful Projects',
            Description:'Elevating Success Through a Track Record of SuccessfulProjects.',
        },
        {
            heading:'10+ Years of Mastery and Expertise',
            Description:'Over a decade of proven expertise, shaping quality with every project.',
        },
        {
            heading:'25+ Strong Team Members',
            Description:'Fueled by a vibrant team of experienced professionals, driving success.',
        },
        {
            heading:'Thriving with 100+ Happy Clients',
            Description:'Enriching Journeys with Our Satisfied Clients',
        },
    ]
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
               <Box position={"relative"}>
                <Box position={"absolute"}  top='-46px' bg="white"  borderRadius={"50%"} border="1px solid #0C1E21" h="30px" w='30px' display={"flex"} justifyContent={"center"} alignItems={"center"}>
<Box   bg={index === 0 ? "linear-gradient(to right, #E97522 0%, #1EA3B1 100%)" : "#0C1E21"}  h="12px" w="12px" borderRadius={"50%"}></Box>
                </Box>
               <Text
                 fontWeight="500"
                 fontSize={{
                   base: "18px",
                   md: "18px",
                   lg: "20px",
                   xl: "22px",
                  
                 }}
                 lineHeight="150% "
                 style={{
                    background: index === 0 ? `linear-gradient(to right, #E97522 0%, #1EA3B1 100%)` : 'none',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
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
                 lineHeight="150% "
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
