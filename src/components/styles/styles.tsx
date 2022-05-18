import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#000",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontSize: 14,
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#fff",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "lightgray",
          border: "1px solid black",
          // borderRadius: "10px",
        },
      },
    },
  },
});

export default baseTheme;
