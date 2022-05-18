import { Box, Button, IconButton, Stack } from "@mui/material";
import React from "react";
import { dark, darkWithBlue, darkWithGreen, darkWithOrange, darkWithRed, darkWithViolet } from "../dark-theme-data";
import { useCustomThemeContext } from "./ThemeContext";
import SquareIcon from "@mui/icons-material/Square";

export default function DarkWithColorTheme() {
  const { updateTheme } = useCustomThemeContext();

  return (
    <div>
      <Box>
        <Stack
          sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
        > 
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #000 0%, #777 52%, #000 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(dark)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #000 0%, #1976d2 90%, #1976d2 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(darkWithBlue)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #000 0%, #ef5350 90%, #ef5350 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(darkWithRed)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #000 0%, #2e7d32 90%, #2e7d32 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(darkWithGreen)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #000 0%, #9c27b0 90%, #9c27b0 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(darkWithViolet)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #000 0%, #ed6c02 90%, #ed6c02 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(darkWithOrange)}
            />
          </IconButton>
        </Stack>
      </Box>
    </div>
  );
}

