import React, { useState } from "react";
import { Box, Button, Image, Flex, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Animation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImages, setShowImages] = useState(false);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setShowImages(false);
  };

  const handleButtonClick = () => {
    setShowImages(!showImages);
  };

  return (
    <Flex align="center" justify="center" flexDirection="column" >
      <Box
      h="100vh"
        position="relative"
        width="100%"
       
        mb={4}
        style={{ overflow: "hidden", display: "grid" }} // Change display property to grid
      >
        <Image
          src={
            selectedImage
              ? selectedImage
              : "/bg1.jpg"
          }
          alt="Banner"
          width="100%"
          height="100%"
        />
        {showImages && (
          <Grid
            width="100%"
            height="100%"
            position="absolute"
            bottom="10px"
            left="50%"
            transform="translateX(-50%)"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            zIndex={2} // Ensuring thumbnails are above the banner image
          >
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ gridRow: "span 1", gridColumn: "span 1",display:"grid" }}
            >
              <GridItem >
                <Image
                  objectFit="cover"
                  src="/bg2.jpg"
                  alt="Thumbnail 1"
                  width="100%"
                  height="100%"
                  onClick={() =>
                    handleImageSelect(
                      "/bg2.jpg"
                    )
                  }
                />
              </GridItem>
            </motion.div>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ gridRow: "span 2", gridColumn: "span 1",display:"grid" }}
            >
              <GridItem >
                <Image
                  objectFit="cover"
                  src="/bg3.jpg"
                  alt="Thumbnail 2"
                  width="100%"
                  height="100%"
                  onClick={() =>
                    handleImageSelect(
                        "/bg3.jpg"
                    )
                  }
                />
              </GridItem>
            </motion.div>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ gridRow: "span 1", gridColumn: "span 1",display:"grid" }}
            >
              <GridItem >
                <Image
                  objectFit="cover"
                  src="/bg4.jpg"
                  alt="Thumbnail 3"
                  width="100%"
                  height="100%"
                  onClick={() =>
                    handleImageSelect(
                        "/bg4.jpg"
                    )
                  }
                />
              </GridItem>
            </motion.div>
          </Grid>
        )}
          <Box position={"absolute"} bottom={"10px"} left='50%'>
      <Button onClick={handleButtonClick} mb={4}>
        {showImages ? "Hide Images" : "Show Images"}
      </Button>
      </Box>
      </Box>
    
      
    </Flex>
  );
};

export default Animation;
