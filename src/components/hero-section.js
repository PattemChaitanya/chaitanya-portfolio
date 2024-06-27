import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { heroSectionContent } from "../content";
import sendAnalyticsData from "../config/analytics";
import { analytics } from "../config/firebase-config";
import { logEvent } from "firebase/analytics";

const Herosection = () => {
  useEffect(() => {
    sendAnalyticsData({
      eventName: "user_added",
      type: "viewing_portfolio",
    });
  }, []);

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
        alignItems: "flex-start",
        flexDirection: "column",
        height: "100vh",
        rowGap: 2,
        width: { sm: "100%", md: "80%" },
        pt: { sm: "20px", md: 0 },
        textAlign: "left",
      }}
    >
      <Typography variant="caption" color="#64ffda" mb={1}>
        {heroSectionContent.content_1}
      </Typography>
      <Typography
        color="secondary"
        variant="h1"
        sx={{
          fontSize: { sm: "32px", md: "3rem" },
          color: "#fff",
          mb: "-10px",
        }}
      >
        {heroSectionContent.content_2}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: { sm: "28px", md: "2rem" } }}
        color="secondary.light"
      >
        {heroSectionContent.content_3}
      </Typography>
      <Typography
        variant="body2"
        color="secondary"
        sx={{ width: { sm: "100%", md: "70%" }, mt: 2 }}
      >
        {heroSectionContent.content_4}
        <Button
          component={"a"}
          href="https://www.futuristiclabs.io/"
          target="_blank"
          sx={{
            fontSize: { sm: "0.8125rem", md: "0.875rem", lg: "0.9375rem" },
            textDecoration: "none",
            p: 0,
            color: "#64ffda",
            "&:hover": {
              textDecoration: "underline",
              textDecorationStyle: "solid",
              textDecorationColor: "#64ffda",
              textDecorationThickness: "2px",
              textDecorationSkipInk: "none",
              transition: "width 0.3s ease-in-out",
            },
          }}
        >
          Futuristic Labs.
        </Button>
      </Typography>
      <br />
      <Button
        variant="outlined"
        target="_blank"
        href={heroSectionContent.file_path}
        sx={{ p: "10px 40px", fontSize: { sm: "24px", md: "20px" } }}
        onClick={() => {
          logEvent(analytics, "resume_button_click", {
            button_name: "resumeButton",
            click_time: new Date().toISOString(),
          });
        }}
      >
        Resume
      </Button>
    </Box>
  );
};

export default Herosection;
