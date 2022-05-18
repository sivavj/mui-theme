import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { useCustomThemeContext } from "./ThemeContext";

export const FontPicker = () => {
  const [fontFam, setFontFam] = useState("sans-serif");
  const { updateTheme } = useCustomThemeContext();

  const handleFontChange = (e: { target: { value: unknown } }) => {
    let value = e.target.value as unknown as string;
    setFont(value);
    setFontFam(value);
  };

  const setFont = (fontType: string) => {
    updateTheme({
      components: {
        MuiTypography: {
          defaultProps: {
            fontFamily: fontType,
          },
        },
      },
    });
  };

  return (
    <>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fontFam}
          label="Font Family"
          variant="standard"
          onChange={handleFontChange}
        >
          <MenuItem value={"Times New Roman"}>Times New Roman</MenuItem>
          <MenuItem value={"sans-serif"}>Sans Serif</MenuItem>
          <MenuItem value={"monospace"}>Mono Space</MenuItem>
          <MenuItem value={"Helvetica Neue"}>Helvetica Neue</MenuItem>
          <MenuItem value={"Courier New"}>Courier New</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
