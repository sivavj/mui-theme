import React from "react";
import { Box, Stack, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useCustomThemeContext } from "./ThemeContext";

const getColorConfig = (primary: string, secondary: string) => {
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
};

export default function ColorSelector() {
  const { updateTheme } = useCustomThemeContext();

  return (
    <div>
      <Box>
        <Stack
          sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
        >
          <IconButton>
            <CircleIcon
              sx={{ color: "#212121" }}
              onClick={() => updateTheme(getColorConfig("#212121", "#424242"))}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#1769aa" }}
              onClick={() => updateTheme(getColorConfig("#1769aa", "#00b0ff"))}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#d32f2f" }}
              onClick={() => updateTheme(getColorConfig("#d32f2f", "#ef5350"))}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#00a152" }}
              onClick={() => updateTheme(getColorConfig("#00a152", "#357a38"))}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#9c27b0" }}
              onClick={() => updateTheme(getColorConfig("#9c27b0", "#ba68c8"))}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#ed6c02" }}
              onClick={() => updateTheme(getColorConfig("#ed6c02", "#ff9800"))}
            />
          </IconButton>
        </Stack>
      </Box>
    </div>
  );
}
