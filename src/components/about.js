import React, { useRef } from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { aboutContent } from "../content/about";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  return (
    <Box
      id="about"
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
          About
        </Typography>
        <Box
          sx={{
            flexGrow: 0.8,
            height: "2px",
            backgroundColor: "black",
          }}
        />
      </Box>
      <Grid
        container
        component={motion.div}
        ref={refContent}
        initial={{ opacity: 0, filter: "blur(6px)" }}
        animate={
          inViewContent
            ? { opacity: 1, filter: "blur(0px)" }
            : { opacity: 1, filter: "blur(6px)" }
        }
        transition={{ duration: 1 }}
        spacing={2}
        sx={{ maxWidth: "lg", width: "100%" }}
      >
        <Grid item xs={12} md={5}>
          <img
            src={aboutContent.image}
            loading="lazy"
            alt={aboutContent.imageAltname}
            style={{
              width: isMobile ? "100%" : "80%",
              height: isMobile ? "300px" : "80%",
              borderRadius: "8px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <Typography variant="body2" color="secondary.dark">
              {aboutContent.content_1}
            </Typography>
            <Typography variant="body2" color="secondary.dark" py={2}>
              {aboutContent.content_2}
            </Typography>
            <Typography variant="body2" color="secondary.dark">
              {aboutContent.content_3}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
