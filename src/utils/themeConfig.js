import { alpha, createTheme } from "@mui/material/styles";

const greenBase = "#004209";
const whiteBase = "#D3D3D3";

const theme = createTheme({
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  palette: {
    primary: {
      main: greenBase,
      light: alpha(greenBase, 0.5),
      dark: alpha(greenBase, 0.9),
    },
    secondary: {
      main: whiteBase,
      light: alpha(whiteBase, 0.5),
      dark: alpha(whiteBase, 0.9),
    },
    background: {
      default: "#393939",
      paper: "#292929",
    },
    text: {
      primary: "#fff",
      secondary: "#333333",
    },
    info: {
      main: "#fff",
      light: alpha("#fff", 0.5),
      dark: alpha("#fff", 0.9),
    },
  },
  typography: {
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
    h1: {
      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
      fontWeight: 500,
      letterSpacing: "0.1rem",
      fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
    },
    h2: {
      fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
      fontWeight: 500,
      letterSpacing: "0.05rem",
      fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
    },
    h3: {
      fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
      fontWeight: 400,
      fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
    },
    h4: {
      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
      fontWeight: 400,
      fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
    },
    body1: {
      fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
      lineHeight: "1.5",
      fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
    },
    body2: {
      fontSize: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem" },
      lineHeight: "1.43",
      fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: greenBase,
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#388E3C",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: greenBase,
          color: "#FFFFFF",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "inherit",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          "&-indicator": {
            backgroundColor: "#388E3C",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          "&.Mui-selected": {
            color: alpha("#388E3C", 0.5),
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          backgroundColor: "black",
          color: whiteBase,
          "& input::placeholder": { color: whiteBase },
        },
      },
    },
  },
  images: {
    default: "path/to/default/image.png",
  },
});

export default theme;
