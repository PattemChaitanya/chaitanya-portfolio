import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import TabPanel from "./tab-panel";

const Skills = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      id="skills"
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: { md: "100vh" },
        padding: isMobile ? "10px" : "0",
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
          Skills Section
        </Typography>
        <Box
          sx={{
            flexGrow: 0.8,
            height: "2px",
            backgroundColor: "black",
          }}
        />
      </Box>
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{ width: isMobile ? "100%" : "80%", marginTop: "40px" }}
      >
        <Box>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="skills and experience tabs"
            variant={isMobile ? "scrollable" : "centered"}
            scrollButtons={isMobile ? "auto" : "off"}
            allowScrollButtonsMobile
            orientation="horizontal"
          >
            <Tab label="Personal Skills" />
            <Tab label="Work Experience" />
          </Tabs>
          <Box sx={{ flexGrow: 1 }}>
            <TabPanel value={tabValue} index={0}>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                - Skill 1: Description of skill 1<br />
                - Skill 2: Description of skill 2<br />
                - Skill 3: Description of skill 3<br />
                - Skill 4: Description of skill 4<br />
              </Typography>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                <ul>
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      SDE Intern{" "}
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ fontWeight: 500 }}
                      >
                        {" "}
                        - FinGPT
                      </Typography>
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: "15px",
                          height: "2px",
                          backgroundColor: "text.primary",
                        }}
                      />
                      <Typography variant="body1">
                        Working on a trading platform for a stealth-mode startup
                        based in California, USA. Integrating AI capabilities
                        and enhancing user experience of the platform using
                        Next.js, TypeScript, NextAuth, Tailwind CSS, React Query
                        and Open AI.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        ml: 6,
                        mt: 1,
                        color: "grey.500",
                        fontWeight: "medium",
                        display: "flex",
                        justifyContent: "space-between",
                        maxWidth: "95%",
                      }}
                    >
                      <Typography variant="body2">
                        Jan 2024 - Present
                      </Typography>
                      <Typography variant="body2">Remote</Typography>
                    </Box>
                  </motion.li>
                </ul>
              </Typography>
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
