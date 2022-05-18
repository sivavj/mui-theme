import { createTheme } from "@mui/material/styles";
import { fontSize } from "@mui/system";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#1769aa",
    },
    secondary: {
      main: "#00b0ff",
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
        elevation: 10,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#e2ebf2",
          border: "1px solid black",
          borderRadius: "0px",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          color: "#000",
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          color: "#000"
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          color: "#000",
          fontSize: "20px",
          fontWeight: "bold"
        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          color: "#000"
        }
      }
    }, 
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#000"
        }
      }
    }
  },
});

export default baseTheme;
