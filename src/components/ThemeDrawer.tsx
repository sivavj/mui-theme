import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";
import {
  colorsBlue,
  colorsGray,
  colorsGreen,
  colorsRed,
  colorsViolet,
  colorsYellow,
  shape0,
  shape10,
  shape15,
  shape20,
  shape25,
  shape5,
  theme1,
  theme2,
  theme3,
  theme4,
  shapeRadius,
  fontSize10,
  fontSize12,
  fontSize14,
  fontSize16,
  fontSize18,
  fontSize20,
  cardStyle1,
  cardStyle2,
  cardStyle3,
  cardStyle4,
  cardStyleDefault,
  fontFamily1,
  fontFamily2,
  fontFamily3,
  fontFamily4,
  fontFamily5,
  getColorConfig,
} from "./data";
import baseTheme from "./styles/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
type Anchor = "top" | "left" | "bottom" | "right";
export default function ThemeDrawer({
  handleSwitch,
  setDefaultTheme,
}: {
  handleSwitch: any;
  setDefaultTheme: any;
}) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [radius, setRadius] = useState(0);
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

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <CloseIcon onClick={toggleDrawer(anchor, false)} />
        </IconButton>
        <Typography variant="h6">Material UI Theme</Typography>
      </List>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button
          color="inherit"
          variant="contained"
          onClick={() => setDefaultTheme(baseTheme)}
        >
          Default
        </Button>
        <Button
          color="success"
          variant="contained"
          onClick={() => handleSwitch(theme1)}
        >
          Green
        </Button>
        <Button
          color="info"
          variant="contained"
          onClick={() => handleSwitch(theme2)}
        >
          Blue
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => handleSwitch(theme3)}
        >
          Red
        </Button>
        <Button
          color="warning"
          variant="contained"
          onClick={() => handleSwitch(theme4)}
        >
          Orange
        </Button>
      </List>
      <Box sx={{ m: 2 }} />
      <Divider />
      <List>
        <Typography>Theme Color</Typography>
        <Stack
          sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
        >
          <IconButton>
            <CircleIcon
              sx={{ color: "#d32f2f" }}
              onClick={() => handleSwitch(getColorConfig("#d32f2f","#ef5350"))}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#00a152" }}
              onClick={() => handleSwitch(getColorConfig("#00a152","#357a38"))}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#1769aa" }}
              onClick={() => handleSwitch(colorsBlue)}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#ed6c02" }}
              onClick={() => handleSwitch(colorsYellow)}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#9c27b0" }}
              onClick={() => handleSwitch(colorsViolet)}
            />
          </IconButton>
          <IconButton>
            <CircleIcon
              sx={{ color: "#212121" }}
              onClick={() => handleSwitch(colorsGray)}
            />
          </IconButton>
        </Stack>
      </List>
      <Divider />
      <List>
        <Typography>Border Radius</Typography>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Button size="small" onClick={() => handleSwitch(shape0)}>
            0
          </Button>
          <Button size="small" onClick={() => handleSwitch(shape5)}>
            5
          </Button>
          <Button size="small" onClick={() => handleSwitch(shape10)}>
            10
          </Button>
          <Button size="small" onClick={() => handleSwitch(shape15)}>
            15
          </Button>
          <Button size="small" onClick={() => handleSwitch(shape20)}>
            20
          </Button>
          <Button size="small" onClick={() => handleSwitch(shape25)}>
            25
          </Button>
        </Stack>
      </List>
      <Divider />
      <List>
        <Typography>{radius}</Typography>
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Radius</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Radius"
            variant="standard"
            onChange={(event: any) => setRadius(event.target.value as number)}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
        </FormControl>
      </List>
      <Divider />
      <List>
        <Typography>Font Size</Typography>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Button size="small" onClick={() => handleSwitch(fontSize10)}>
            10
          </Button>
          <Button size="small" onClick={() => handleSwitch(fontSize12)}>
            12
          </Button>
          <Button size="small" onClick={() => handleSwitch(fontSize14)}>
            14
          </Button>
          <Button size="small" onClick={() => handleSwitch(fontSize16)}>
            16
          </Button>
          <Button size="small" onClick={() => handleSwitch(fontSize18)}>
            18
          </Button>
          <Button size="small" onClick={() => handleSwitch(fontSize20)}>
            20
          </Button>
        </Stack>
      </List>
      <Divider />
      <List>
        <Typography>Font Family</Typography>
        <Stack sx={{ display: "flex", flexDirection: "column" }}>
          <Button size="small" onClick={() => handleSwitch(fontFamily1)}>
            Times New Roman
          </Button>
          <Button size="small" onClick={() => handleSwitch(fontFamily2)}>
            Sans Serif
          </Button>
          <Button size="small" onClick={() => handleSwitch(fontFamily3)}>
            Mono Space
          </Button>
          <Button size="small" onClick={() => handleSwitch(fontFamily4)}>
            Helvetica Neue
          </Button>
          <Button size="small" onClick={() => handleSwitch(fontFamily5)}>
            Courier New'
          </Button>
        </Stack>
      </List>
      <Divider />
      <List>
        <Typography>Card Style</Typography>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Button size="small" onClick={() => handleSwitch(cardStyleDefault)}>
            Default
          </Button>
          <Button size="small" onClick={() => handleSwitch(cardStyle1)}>
            Style 1
          </Button>
          <Button size="small" onClick={() => handleSwitch(cardStyle2)}>
            Style 2
          </Button>
          <Button size="small" onClick={() => handleSwitch(cardStyle3)}>
            Style 3
          </Button>
          <Button size="small" onClick={() => handleSwitch(cardStyle4)}>
            Style 4
          </Button>
        </Stack>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton className="settings">
          <SettingsIcon
            fontSize="large"
            color="primary"
            onClick={toggleDrawer("right", true)}
          />
        </IconButton>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
