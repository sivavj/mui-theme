import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import { useCustomThemeContext } from "./ThemeContext";
import SquareIcon from "@mui/icons-material/Square";
import { light, lightWithBlue, lightWithGreen, lightWithOrange, lightWithRed, lightWithViolet } from "../light-theme-data";

export default function lightWithColorTheme() {
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
                  "linear-gradient(to right, #fff 0%, #777 52%, #fff 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(light)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #fff 0%, #1976d2 90%, #1976d2 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(lightWithBlue)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #fff 0%, #ef5350 90%, #ef5350 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(lightWithRed)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #fff 0%, #2e7d32 90%, #2e7d32 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(lightWithGreen)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #fff 0%, #9c27b0 90%, #9c27b0 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(lightWithViolet)}
            />
          </IconButton>
          <IconButton>
            <SquareIcon
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #fff 0%, #ed6c02 90%, #ed6c02 100%)",
                padding: 1.5,
              }}
              onClick={() => updateTheme(lightWithOrange)}
            />
          </IconButton>
        </Stack>
      </Box>
    </div>
  );
}

