import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
  TextField,
  IconButton,
  Snackbar,
} from "@mui/material";
import { motion } from "framer-motion";
import { linksContent } from "../content";
import { v4 as uuidv4 } from "uuid";
import { firestore } from "../config/firebase-config";
import { doc, setDoc } from "firebase/firestore";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = uuidv4();
    setOpen(true);
    setName(formData.name);
    await setDoc(doc(firestore, "user-data", uid), { ...formData, id: uid });
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
          Contact
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
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "lg", width: "100%" }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
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
          <Typography variant="body1" sx={{ textAlign: "center", pt: 6 }}>
            <Typography variant="body2" color="secondary.dark">
              If you have any questions or would like to collaborate, please
              don't hesitate to contact me
              <br />
              {linksContent.map((item) => (
                <IconButton fontSize="large" key={item.id} href={item.link}>
                  {item.icon}
                </IconButton>
              ))}
              <Typography
                sx={{
                  color: "secondary",
                  fontSize: { xs: "12px", md: "12px", lg: "16px" },
                  textAlign: "center",
                }}
              >
                All Rights Reserved © {new Date().getFullYear()} Chaitanya
                Pattem
              </Typography>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        message={`Hey hi, ${name.slice(0, 1).toUpperCase()}${name.slice(
          1
        )}. Thanks for your interest. I will get back to you.`}
      />
    </Box>
  );
};

export default Contact;
