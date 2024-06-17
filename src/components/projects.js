import React from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const projects = [
    {
      title: "Project 1",
      description: "This is the first project",
      image: "/path-to-image.jpg",
    },
    {
      title: "Project 2",
      description: "This is the second project",
      image: "/path-to-image.jpg",
    },
    {
      title: "Project 3",
      description: "This is the third project",
      image: "/path-to-image.jpg",
    },
    {
      title: "Project 4",
      description: "This is the third project",
      image: "/path-to-image.jpg",
    },
    {
      title: "Project 5",
      description: "This is the third project",
      image: "/path-to-image.jpg",
    },
  ];

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
        height: isMobile ? "auto" : "100vh",
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
          Projects Section
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
        sx={{
          maxWidth: "lg",
          width: "100%",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {projects.slice(0, 4).map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ margin: "0 auto" }}
          >
            <Card sx={{ maxWidth: 345, mb: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography sx={{ textAlign: "center" }}>
        {projects.length > 4 && "see more"}
      </Typography>
    </Box>
  );
};

export default Projects;
