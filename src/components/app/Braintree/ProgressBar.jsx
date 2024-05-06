import React from "react";
import { Box, Progress } from "@chakra-ui/react";

const ProgressBar = ({ progress }) => {
  const formattedProgress = `${progress}%`;

  return (
    <Box
      bg={`linear-gradient(to right, #E97522 ${formattedProgress}, #1EA3B1 ${formattedProgress})`}
      w="100%"
      h="10px"
      borderRadius="10px"
      mb="20px"
    >
      <Progress
        value={progress}
        h="10px"
        borderRadius="10px"
        bg="transparent" // Set the background of Progress component to transparent
      />
    </Box>
  );
};

export default ProgressBar;
