import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { projectsContent } from "../content/projects";
import LeftView from "./left-view";
import RightView from "./right-view";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="projects"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
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
          mb: 8,
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
          Projects
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
        spacing={2}
        columnGap={2}
        sx={{
          maxWidth: "lg",
          width: "100%",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {projectsContent
          .slice(0, 3)
          .map((project, index) =>
            project.id % 2 === 0 ? (
              <LeftView key={index} {...project} />
            ) : (
              <RightView key={index} {...project} />
            )
          )}
      </Grid>
      <Typography sx={{ textAlign: "center" }}>
        {projectsContent.length > 4 && "see more"}
      </Typography>
    </Box>
  );
};

export default Projects;
