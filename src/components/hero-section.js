import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <Box
      id="intro"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2" component="h1">
        Hero Section
      </Typography>
    </Box>
  );
};

export default Herosection;
