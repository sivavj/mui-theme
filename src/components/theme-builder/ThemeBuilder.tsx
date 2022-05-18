import "../../App.css";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import RadiusSlider from "./RadiusSlider";
import { FontPicker } from "./FontPicker";
import ColorSelector from "./ColorSelector";
import DarkWithColorTheme from "./DarkWithColorTheme";
import LightWithColorTheme from "./LightWithColorTheme";
import FontSizeSelector from "./FontSizeSelector";
import ColorPickerTheme from "./ColorPickerTheme";

type Anchor = "right";

export const ThemeBuilder = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <>
      <Drawer
        anchor="right"
        open={state["right"]}
        BackdropProps={{invisible: true}}
        onClose={toggleDrawer("right", false)}
      >
        {" "}
        <Box sx={{ mt: 1 }}>
          <IconButton>
            <CloseIcon onClick={toggleDrawer("right", false)} />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ m: 2 }}>
          <Typography>Color Pattern</Typography>
          <ColorSelector />
        </Box>
        <Divider />
        <Box sx={{ m: 2 }}>
          <Typography>Light Theme Pattern</Typography>
          <LightWithColorTheme />
        </Box>
        <Divider/>
        <Box sx={{ m: 2 }}>
          <Typography>Dark Theme Pattern</Typography>
          <DarkWithColorTheme />
        </Box>
        <Divider />
        <Box sx={{ m: 2 }}>
          <Typography>Color Picker</Typography>
         <ColorPickerTheme/>
        </Box>
        <Divider />
        <Box sx={{ m: 2 }}>
          <Typography>Font Family</Typography>
          <FontPicker />
        </Box>
        <Divider />
        <Box sx={{ m: 2 }}>
          <Typography>Font Size</Typography>
          <FontSizeSelector />
        </Box>
        <Divider />
        <Box sx={{ m: 2 }}>
          <Typography>Border Radius</Typography>
          <RadiusSlider />
        </Box>
      </Drawer>
      <IconButton className="settings">
        <SettingsIcon
          fontSize="large"
          color="primary"
          onClick={toggleDrawer("right", true)}
        />
      </IconButton>
    </>
  );
};
