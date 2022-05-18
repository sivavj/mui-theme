import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useCustomThemeContext } from "./ThemeContext";

export default function RadiusSlider() {
  const [radiusVal, setRadiusVal] = React.useState(0)
  const { updateTheme } = useCustomThemeContext();

  const setRadius = (event: Event, radius: number | number[]) => {
    updateTheme({
      shape: { borderRadius: Array.isArray(radius) ? radius[0] : radius },
      components: {
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: Array.isArray(radius) ? radius[0] : radius ,
            },
          },
        },
      }
    });
    setRadiusVal(Array.isArray(radius) ? radius[0] : radius);
  };
  return (
    <Box sx={{ width: 300, mt: 5 }}>
      <Slider
        aria-label="Border Radius"
        defaultValue={radiusVal}
        valueLabelDisplay="auto"
        step={2}
        marks
        min={0}
        max={25}
        onChange={setRadius}
      />
    </Box>
  );
}
