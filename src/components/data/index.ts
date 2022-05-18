export const theme1 = {
  palette: {
    primary: {
      main: "#357a38",
    },
    secondary: {
      main: "#00a152",
    },
  },

  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "small",
        sx: {
          color: "#041069",
          borderRadius: "5px",
          fontSize: "10px",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 10,
      },
      styleOverrides: {
        root: {
          background: "#9fd6b0",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "lightgreen",
          border: "1px solid green",
          borderRadius: "0",
        },
      },
    },
  },
};

export const theme2 = {
  palette: {
    primary: {
      main: "#1769aa",
    },
    secondary: {
      main: "#00b0ff",
    },
  },

  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "large",
        sx: {
          borderRadius: "10px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#9fbdd6",
        },
      },
      defaultProps: {
        elevation: 15,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "lightblue",
          border: "1px solid blue",
          borderRadius: "10px",
        },
      },
    },
  },
};

export const theme3 = {
  palette: {
    primary: {
      main: "#ef5350",
    },
    secondary: {
      main: "#d32f2f",
    },
  },
  shape: {
    borderRadius: 15,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "large",
        sx: {
          borderRadius: "25px",
        },
      },
    },
    MuiPaper: {
      defaultProp: {
        elevation: 20,
      },
      styleOverrides: {
        root: {
          background: "#cfa8a3",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "lightred",
          border: "1px solid red",
          borderRadius: "15px",
        },
      },
    },
  },
};

export const theme4 = {
  palette: {
    primary: {
      main: "#ff9800",
    },
    secondary: {
      main: "#ed6c02",
    },
  },
  shape: {
    borderRadius: 25,
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
          background: "#dec797",
        },
      },
      defaultProp: {
        elevation: 0,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "lightyellow",
          border: "1px solid orange",
          borderRadius: "20px",
        },
      },
    },
  },
};

export const colorsYellow = {
  palette: {
    primary: {
      main: "#ff9800",
    },
    secondary: {
      main: "#ed6c02",
    },
  },
};

export const colorsBlue = {
  palette: {
    primary: {
      main: "#1769aa",
    },
    secondary: {
      main: "#00b0ff",
    },
  },
};

export const colorsRed = {
  palette: {
    primary: {
      main: "#d32f2f",
    },
    secondary: {
      main: "#ef5350",
    },
  },
};

export const colorsGreen = {
  palette: {
    primary: {
      main: "#00a152",
    },
    secondary: {
      main: "#357a38",
    },
  },
};

export const colorsViolet = {
  palette: {
    primary: {
      main: "#9c27b0",
    },
    secondary: {
      main: "#ba68c8",
    },
  },
};

export const colorsGray = {
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#424242",
    },
  },
};


export const getColorConfig= (primary:string, secondary:string)=>{
  return {
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
  };
}

export const shapeRadius = ({ radius }: { radius: number }) => {
  return {
    shape: {
      borderRadius: radius,
    },
  };
};

export const shape0 = {
  shape: {
    borderRadius: 0,
  },
};

export const shape5 = {
  shape: {
    borderRadius: 5,
  },
};

export const shape10 = {
  shape: {
    borderRadius: 10,
  },
};

export const shape15 = {
  shape: {
    borderRadius: 15,
  },
};

export const shape20 = {
  shape: {
    borderRadius: 20,
  },
};

export const shape25 = {
  shape: {
    borderRadius: 25,
  },
};

export const fontSize10 = {
  typography: {
    fontFamily: "monospace",
    h1: { fontSize: 69 },
    h2: { fontSize: 57 },
    h3: { fontSize: 48 },
    h4: { fontSize: 40 },
    h5: { fontSize: 33 },
    h6: { fontSize: 28 },
    subtitle1: { fontSize: 23 },
    subtitle2: { fontSize: 19 },
    body1: { fontSize: 19 },
    body2: { fontSize: 16 }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: 12,
      },
    },
  },
};

export const fontSize12 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: 12,
      },
    },
  },
};

export const fontSize14 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: 14,
      },
    },
  },
};

export const fontSize16 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: 16,
      },
    },
  },
};

export const fontSize18 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: 18,
      },
    },
  },
};

export const fontSize20 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: 20,
      },
    },
  },
};



export const fontFamily1 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Times New Roman",
      },
    },
  },
};

export const fontFamily2 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "sans-serif",
      },
    },
  },
};


export const fontFamily3 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "monospace",
      },
    },
  },
};


export const fontFamily4 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Helvetica Neue",
      },
    },
  },
};

export const fontFamily5 = {
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Courier New'",
      },
    },
  },
};



export const cardStyleDefault = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "lightgray",
          border: "1px solid black",
          borderRadius: "0px",
        },
      },
    },
  },
};
export const cardStyle1 = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "lightyellow",
          border: "1px solid orange",
          borderRadius: "5px",
        },
      },
    },
  },
};


export const cardStyle2 = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "coral",
          border: "1px solid red",
          borderRadius: "10px",
        },
      },
    },
  },
};

export const cardStyle3 = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "lightblue",
          border: "1px solid royalblue",
          borderRadius: "15px",
        },
      },
    },
  },
};

export const cardStyle4 = {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "lightgreen",
          border: "1px solid green",
          borderRadius: "15px",
        },
      },
    },
  },
};
