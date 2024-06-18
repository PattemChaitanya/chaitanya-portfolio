import React, { useRef, useState } from "react";
import {
  Box,
  LinearProgress,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import TabPanel from "./tab-panel";
import { skillsWithProgress, someExtrakills, workExperience } from "../content";

const Skills = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      id="skills"
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
      <Box sx={{ width: isMobile ? "100%" : "90%", marginTop: "40px" }}>
        <Box>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="skills and experience tabs"
            variant={isMobile ? "fullWidth" : "centered"}
            orientation="horizontal"
            sx={{ pb: 2 }}
          >
            <Tab
              label="Personal Skills"
              sx={{
                textTransform: "capitalize",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            />
            <Tab
              label="Work Experience"
              sx={{
                textTransform: "capitalize",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            />
          </Tabs>
          <Box
            sx={{ flexGrow: 1 }}
            component={motion.div}
            ref={refContent}
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={
              inViewContent
                ? { opacity: 1, filter: "blur(0px)" }
                : { opacity: 1, filter: "blur(6px)" }
            }
            transition={{ duration: 1 }}
          >
            <TabPanel value={tabValue} index={0}>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  py: 2,
                }}
              >
                {skillsWithProgress.map((item) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: isMobile ? "100%" : "33%",
                      pb: 2,
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ width: "95%", pb: 2, textTransform: "capitalize" }}
                      textAlign="left"
                      pl={1}
                    >
                      {item.name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      sx={{ width: isMobile ? "100%" : "85%" }}
                      value={item.knownPercentage}
                    />
                  </Box>
                ))}
              </Typography>
              <Typography variant="h2" textAlign="left" py={3}>
                Used tools and practices in my development:
              </Typography>
              <Typography
                component={"ol"}
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  pl: "20px",
                }}
              >
                {someExtrakills.map((item) => (
                  <Box
                    component={"li"}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      width: isMobile ? "95%" : "33%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        width: "100%",
                        textTransform: "capitalize",
                        textAlign: "left",
                      }}
                    >
                      &#x2022; {item}
                    </Typography>
                  </Box>
                ))}
              </Typography>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ textAlign: "left" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  <Typography variant={isMobile ? "h3" : "h2"}>
                    Software Engineer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: !isMobile ? "14px" : "12px",
                      p: "5px 8px",
                    }}
                  >
                    @ Futuristic Labs
                  </Typography>
                </Box>
                <Box component={"ul"} sx={{ paddingInlineStart: "25px" }}>
                  {workExperience.map((item, index) => (
                    <Box
                      component={"li"}
                      key={index}
                      sx={{
                        mt: 1,
                      }}
                    >
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    ml: { sm: 6, md: 1 },
                    mt: 1,
                    color: "grey.500",
                    fontWeight: "medium",
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "100%",
                    mr: !isMobile && 10,
                  }}
                >
                  <Typography variant="body2">Sep 2022 - Present</Typography>
                  <Typography variant="body2">Hyderabad</Typography>
                </Box>
              </motion.div>
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
