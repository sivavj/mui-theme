import { Box, FormControl, MenuItem, Select, Slider } from "@mui/material";
import { useState } from "react";
import { useCustomThemeContext } from "./ThemeContext";

export default function FontSizeSelector() {
  const { updateTheme } = useCustomThemeContext();
  const [fontCat, setFontCat] = useState<string>("");

  const handleFontChange = (e: { target: { value: unknown } }) => {
    let value = e.target.value as unknown as string;
    setFontCat(value);
  };

  const setFontSize = (event: Event, size: number | number[]) => {
    switch (fontCat) {
      case "h1": {
        updateTheme({
          typography: {
            h1: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "h2": {
        updateTheme({
          typography: {
            h2: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "h3": {
        updateTheme({
          typography: {
            h3: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "h4": {
        updateTheme({
          typography: {
            h4: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "h5": {
        updateTheme({
          typography: {
            h5: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "h6": {
        updateTheme({
          typography: {
            h6: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "subtitle1": {
        updateTheme({
          typography: {
            subtitle1: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "subtitle2": {
        updateTheme({
          typography: {
            subtitle2: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "body1": {
        updateTheme({
          typography: {
            body1: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "body2": {
        updateTheme({
          typography: {
            body2: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "button": {
        updateTheme({
          typography: {
            button: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
        break;
      }
      case "caption": {
        updateTheme({
          typography: {
            caption: { fontSize: Array.isArray(size) ? size[0] : size },
          },
        });
      }
    }
  };

  return (
    <div>
      <div>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fontCat}
            label="Font Family"
            variant="standard"
            onChange={handleFontChange}
          >
            <MenuItem value={"h1"}>h1</MenuItem>
            <MenuItem value={"h2"}>h2</MenuItem>
            <MenuItem value={"h3"}>h3 </MenuItem>
            <MenuItem value={"h4"}>h4 </MenuItem>
            <MenuItem value={"h5"}>h5</MenuItem>
            <MenuItem value={"h6"}>h6 </MenuItem>
            <MenuItem value={"subtitle1"}>subtitle1</MenuItem>
            <MenuItem value={"subtitle2"}>subtitle2</MenuItem>
            <MenuItem value={"body1"}>body1</MenuItem>
            <MenuItem value={"body2"}>body2</MenuItem>
            <MenuItem value={"button"}>button</MenuItem>
            <MenuItem value={"caption"}>caption</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Box sx={{ mt: 2 }}>
        <Slider
          aria-label="Border Radius"
          valueLabelDisplay="auto"
          step={2}
          marks
          min={10}
          max={100}
          onChange={setFontSize}
        />
      </Box>
    </div>
  );
}
