import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="about"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: { md: "100vh" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isMobile ? "10px" : "20px",
          mb: 4,
        }}
      >
        <Box
          sx={{
            flexGrow: 0.8,
            height: "2px",
            backgroundColor: "black",
          }}
        />
        <Typography variant="h2" component="h1" px={2}>
          About Section
        </Typography>
        <Box
          sx={{
            flexGrow: 0.8,
            height: "2px",
            backgroundColor: "black",
          }}
        />
      </Box>
      <Grid container spacing={2} sx={{ maxWidth: "lg", width: "100%" }}>
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src="/path-to-image.jpg"
            alt="Descriptive Alt Text"
            sx={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <Typography variant="body2" color="secondary.dark">
              I am passionate about creating exceptional user experiences. After
              a period focused on travel, family, and continuous learning,
              I&apos;m eager to bring my refreshed perspective to a
              product-focused company.
            </Typography>
            <Typography variant="body2" color="secondary.dark" py={2}>
              My goal is to contribute as a valuable member of a product team,
              applying my expertise in React, Node.js, and UI design while
              learning from colleagues. Together, we can create meaningful
              products that enrich lives.
            </Typography>
            <Typography variant="body2" color="secondary.dark">
              Professionally, I specialize in HTML, CSS, and JavaScript,
              developing dynamic single-page applications. I excel at
              translating UI/UX designs into functional web interfaces, building
              reusable React components, and crafting responsive layouts
              optimized for mobile devices. My track record demonstrates
              effective team collaboration and consistently delivering
              high-quality products within deadlines.
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
