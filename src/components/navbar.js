import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Stack,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        top: "30px",
      });
    }
    handleClose();
  };

  return (
    <AppBar component={"nav"} position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            display: { xs: "none", sm: "block" },
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("intro")}
        >
          Chaitanya Pattem
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("intro")}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: "1rem",
            }}
          >
            Chaitanya
          </Typography>
        </Box>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: { xs: 1, sm: 2, md: 3 }, display: { sm: "none" } }}
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => scrollToSection("intro")}>
            Introduction
          </MenuItem>
          <MenuItem onClick={() => scrollToSection("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollToSection("skills")}>Skills</MenuItem>
          <MenuItem onClick={() => scrollToSection("projects")}>
            Projects
          </MenuItem>
          <MenuItem onClick={() => scrollToSection("contact")}>
            Contact
          </MenuItem>
        </Menu>
        <Stack sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="info" onClick={() => scrollToSection("intro")}>
            Introduction
          </Button>
          <Button color="info" onClick={() => scrollToSection("about")}>
            About
          </Button>
          <Button color="info" onClick={() => scrollToSection("skills")}>
            Skills
          </Button>
          <Button color="info" onClick={() => scrollToSection("projects")}>
            Projects
          </Button>
          <Button color="info" onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
