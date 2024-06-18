import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Stack,
  Tooltip,
  Link,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const RightView = ({ name, description, img, tech, source, demo }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const refContent = useRef(null);
  const inViewContent = useInView(refContent);
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Grid
      container
      component={motion.div}
      ref={refContent}
      gap={4}
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={
        inViewContent
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 1, filter: "blur(6px)" }
      }
      transition={{ duration: 1 }}
      sx={{ maxWidth: "lg", width: "100%" }}
      mb={7}
    >
      {isMobile ? (
        <Grid
          item
          xs={12}
          sx={{
            background: `linear-gradient(rgb(57,57,57, 0.1), rgb(57,57,57, 0.1)),url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            boxShadow: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              backdropFilter: "blur(6px) sepia(90%)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                width: "100%",
                textAlign: "left",
                py: 2,
                px: 3,
                zIndex: 10,
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
                transition: "all ease-in-out 300ms",
              }}
              color="secondary"
            >
              {name}
            </Typography>
            <Box
              sx={{
                width: "100%",
                maxWidth: { lg: "500px" },
                p: 3,
                py: { md: 2 },
                transition: "all ease-in-out 300ms",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 500,
                  width: "100%",
                  textAlign: "left",
                  transition: "all ease-in-out 300ms",
                }}
              >
                {description}
              </Typography>
            </Box>
            <Stack
              direction="row"
              spacing={{ xs: 2, md: 3 }}
              sx={{
                flexWrap: "wrap",
                justifyContent: "flex-end",
                mt: 1,
                mr: 3,
              }}
            >
              {tech?.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    typography: { xs: "subtitle1", md: "subtitle2" },
                    color: "text.primary",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
            <Stack
              direction="row"
              spacing={{ xs: 2, md: 3 }}
              sx={{
                mt: 1,
                mr: 3,
                pb: 3,
                justifyContent: "flex-end",
              }}
            >
              <Tooltip title="Source Code" placement="top" arrow>
                <Link href={source} target="_blank" rel="noreferrer">
                  <GitHubIcon color="secondary" />
                </Link>
              </Tooltip>
              {demo && (
                <Tooltip title="Demo" placement="top" arrow>
                  <Link href={demo} target="_blank" rel="noreferrer">
                    <LaunchIcon color="secondary" />
                  </Link>
                </Tooltip>
              )}
            </Stack>
          </Typography>
        </Grid>
      ) : (
        <>
          <Grid item xs={12} md={6.5}>
            <Box
              component="img"
              src={img}
              loading="lazy"
              alt={name}
              sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
              onMouseEnter={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  width: "100%",
                  textAlign: "left",
                  pt: 2,
                  px: 3,
                  borderTopRightRadius: "8px",
                  borderTopLeftRadius: "8px",
                  transition: "all ease-in-out 300ms",
                  ...(isMouseOver && {
                    color: "text.secondary",
                    background: "#fff",
                  }),
                }}
                color="secondary"
              >
                {name}
              </Typography>
              <Box
                sx={{
                  p: 3,
                  borderBottomRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  boxShadow: 1,
                  transition: "all ease-in-out 300ms",
                  ...(isMouseOver && {
                    background: "#fff",
                  }),
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 500,
                    textAlign: "left",
                    transition: "all ease-in-out 300ms",
                    ...(isMouseOver && { color: "text.secondary" }),
                  }}
                >
                  {description}
                </Typography>
              </Box>
              <Stack
                direction="row"
                spacing={{ xs: 2, md: 3 }}
                sx={{
                  justifyContent: "flex-end",
                  mt: 1,
                  ml: 1,
                }}
              >
                {tech?.map((item, i) => (
                  <Typography
                    key={i}
                    sx={{
                      typography: { xs: "subtitle1", md: "subtitle2" },
                      color: "text.primary",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
              {/* links */}
              <Stack
                direction="row"
                spacing={5}
                sx={{
                  mt: 1,
                  ml: 1,
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Tooltip title="Source Code" placement="top" arrow>
                  <Link href={source} target="_blank" rel="noreferrer">
                    <GitHubIcon color="secondary" />
                  </Link>
                </Tooltip>
                {demo && (
                  <Tooltip title="Demo" placement="top" arrow>
                    <Link href={demo} target="_blank" rel="noreferrer">
                      <LaunchIcon color="secondary" />
                    </Link>
                  </Tooltip>
                )}
              </Stack>
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default RightView;
