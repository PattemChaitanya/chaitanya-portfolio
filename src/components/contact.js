import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const isFormFilled = formData.name && formData.email && formData.message;

  return (
    <Box
      id="contact"
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
          Contact Section
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
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            as="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "50%" }, // Adjusted width based on mobile
              textAlign: "center",
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ mb: 2 }}
            />
            <TextField
              name="message"
              value={formData.message}
              placeholder="Your Message"
              multiline
              rows={4}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isFormFilled ? false : true}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="secondary.dark">
              If you have any questions or would like to collaborate, please
              don't hesitate to contact me at{" "}
              <a
                style={{ color: "inherit" }}
                href="mailto:pattemchaitu@gmail.com"
              >
                pattemchaitu@gmail.com
              </a>
              .
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
