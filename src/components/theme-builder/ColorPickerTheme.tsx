import React from "react";
import ColorPicker from "material-ui-color-picker";
import { useCustomThemeContext } from "./ThemeContext";
import { Stack } from "@mui/material";
import Box from "@mui/system/Box";

const getPrimaryColor = (primary: string) => {
  return {
    palette: {
      primary: {
        main: primary,
      },
    },
  };
};
const getSecondaryColor = (secondary: string) => {
  return {
    palette: {
      secondary: {
        main: secondary,
      },
    },
  };
};
const getErrorColor = (error: string) => {
  return {
    palette: {
      secondary: {
        main: error,
      },
    },
  };
};
const getWarningColor = (warning: string) => {
  return {
    palette: {
      secondary: {
        main: warning,
      },
    },
  };
};
const getInfoColor = (info: string) => {
  return {
    palette: {
      secondary: {
        main: info,
      },
    },
  };
};
const getSuccessColor = (success: string) => {
  return {
    palette: {
      secondary: {
        main: success,
      },
    },
  };
};

export default function ColorPickerTheme() {
  const { updateTheme } = useCustomThemeContext();

  const setPrimaryColor = React.useCallback((color: string) => {
    console.log(color);
    updateTheme(getPrimaryColor(color));
  }, []);
  const setSecondaryColor = React.useCallback((color: string) => {
    console.log(color);
    updateTheme(getSecondaryColor(color));
  }, []);
  const setErrorColor = React.useCallback((color: string) => {
    console.log(color);
    updateTheme(getErrorColor(color));
  }, []);
  const setWarningColor = React.useCallback((color: string) => {
    console.log(color);
    updateTheme(getWarningColor(color));
  }, []);
  const setInfoColor = React.useCallback((color: string) => {
    console.log(color);
    updateTheme(getInfoColor(color));
  }, []);
  const setSuccessColor = React.useCallback((color: string) => {
    console.log(color);
    updateTheme(getSuccessColor(color));
  }, []);

  return (
    <div>
      <Box>
        <Stack> 
          <ColorPicker
            name="color"
            defaultValue="#1976d2"
            onChange={setPrimaryColor}
          />
          <ColorPicker
            name="color"
            defaultValue="#9c27b0"
            onChange={setSecondaryColor}
          />
          <ColorPicker
            name="color"
            defaultValue="#d32f2f"
            onChange={setErrorColor}
          />
          <ColorPicker
            name="color"
            defaultValue="#ed6c02"
            onChange={setWarningColor}
          />
          <ColorPicker
            name="color"
            defaultValue="#0288d1"
            onChange={setInfoColor}
          />
          <ColorPicker
            name="color"
            defaultValue="#2e7d32"
            onChange={setSuccessColor}
          />
        </Stack>
      </Box>
    </div>
  );
}
