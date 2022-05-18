import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import BarChartIcon from "@mui/icons-material/BarChart";
import Battery5BarIcon from "@mui/icons-material/Battery5Bar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TableChartIcon from "@mui/icons-material/TableChart";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import SpeedIcon from "@mui/icons-material/Speed";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ImageIcon from "@mui/icons-material/Image";
import OpacityIcon from "@mui/icons-material/Opacity";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Looks6Icon from "@mui/icons-material/Looks6";
import PieChartIcon from "@mui/icons-material/PieChart";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import TuneIcon from "@mui/icons-material/Tune";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PropaneTankIcon from "@mui/icons-material/PropaneTank";
import AbcIcon from "@mui/icons-material/Abc";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import TableViewIcon from "@mui/icons-material/TableView";
import Grid from "@mui/material/Grid";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { Close, FactCheck } from "@mui/icons-material";
import WidgetTiles from "./WidgetTiles";

type Anchor = "top" | "left" | "bottom" | "right";

const fabStyle = {
  position: "absolute",
  bottom: 25,
  right: 25,
};

export type WidgetType =
  | "Bar"
  | "Battery"
  | "Clock"
  | "Devices Table"
  | "Double Axis"
  | "Gauge"
  | "HTML Canvas"
  | "Histogram"
  | "Image"
  | "Indicator"
  | "Line"
  | "Manual Input"
  | "Map"
  | "Metric"
  | "Pie"
  | "Rose Chart"
  | "Scatter"
  | "Slider"
  | "Switch"
  | "Tank"
  | "Text"
  | "Thermometer"
  | "Values Table"
  | "Variable Table";

interface WidgetConfig {
  icon: React.ReactNode;
  text: string;
  type: WidgetType;
}

const widgetList: WidgetConfig[] = [
  {
    icon: <BarChartIcon />,
    text: "Bar",
    type: "Bar",
  },
  {
    icon: <Battery5BarIcon />,
    text: "Battery",
    type: "Battery",
  },
  {
    icon: <AccessTimeIcon />,
    text: "Clock",
    type: "Clock",
  },
  {
    icon: <TableChartIcon />,
    text: "Devices Table",
    type: "Devices Table",
  },
  {
    icon: <LineAxisIcon />,
    text: "Double Axis",
    type: "Double Axis",
  },
  {
    icon: <SpeedIcon />,
    text: "Gauge",
    type: "Gauge",
  },
  {
    icon: <CodeOffIcon />,
    text: "HTML Canvas",
    type: "Gauge",
  },
  {
    icon: <InsertChartIcon />,
    text: "Histogram",
    type: "Histogram",
  },
  {
    icon: <ImageIcon />,
    text: "Image",
    type: "Image",
  },
  {
    icon: <OpacityIcon />,
    text: "Indicator",
    type: "Indicator",
  },
  {
    icon: <ShowChartIcon />,
    text: "Line",
    type: "Line",
  },
  {
    icon: <KeyboardIcon />,
    text: "Manual Input",
    type: "Manual Input",
  },
  {
    icon: <LocationOnIcon />,
    text: "Map",
    type: "Map",
  },
  {
    icon: <Looks6Icon />,
    text: "Metric",
    type: "Metric",
  },
  {
    icon: <PieChartIcon />,
    text: "Pie",
    type: "Pie",
  },
  {
    icon: <AcUnitIcon />,
    text: "Rose Chart",
    type: "Rose Chart",
  },
  {
    icon: <ScatterPlotIcon />,
    text: "Scatter",
    type: "Scatter",
  },
  {
    icon: <TuneIcon />,
    text: "Slider",
    type: "Slider",
  },
  {
    icon: <PowerSettingsNewIcon />,
    text: "Switch",
    type: "Switch",
  },
  {
    icon: <PropaneTankIcon />,
    text: "Tank",
    type: "Tank",
  },
  {
    icon: <AbcIcon />,
    text: "Text",
    type: "Text",
  },
  {
    icon: <DeviceThermostatIcon />,
    text: "Thermometer",
    type: "Thermometer",
  },
  {
    icon: <TableViewIcon />,
    text: "Values Table",
    type: "Values Table",
  },
  {
    icon: <TableViewIcon />,
    text: "Variables Table",
    type: "Variable Table",
  },
];

export interface WidgetDrawerProps {
  onWidgetSelected: (widgetType: WidgetType) => void;
}

export const WidgetDrawer: React.FC<WidgetDrawerProps> = ({
  onWidgetSelected,
}) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const widgetPanel = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Tooltip title="Close" placement="right">
          <IconButton>
            <Close onClick={toggleDrawer("right", false)} color="secondary" />
          </IconButton>
        </Tooltip>
        <Typography
          variant="h5"
          color="secondary"
          sx={{ pl: 5, fontWeight: "bold" }}
        >
          Add New Widget
        </Typography>
      </Box>
      <WidgetTile onWidgetSelected={onWidgetSelected} />
      <WidgetTiles onWidgetSelected={onWidgetSelected} />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Fab
          size="medium"
          color="secondary"
          onClick={toggleDrawer("right", true)}
          aria-label="add"
          sx={fabStyle}
        >
          <AddIcon />
        </Fab>
        <Drawer
          anchor="right"
          open={state["right"]}
          BackdropProps={{ invisible: true }}
        >
          {widgetPanel("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export const WidgetTile = ({ onWidgetSelected }:{ onWidgetSelected: any }) => {
  return (
    <Grid container spacing={1} sx={{ p: 1 }}>
      {widgetList.map((widget, index) => (
        <Grid item key={index} xs={6} sm={4} md={4}>
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              color: "primary.main",
              background: "background.paper",
              "&:hover": { borderColor: "primary.main" },
            }}
          >
            <CardContent
              sx={{ flexGrow: 1 }}
              onClick={() => onWidgetSelected(widget.type)}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pb: 2,
                }}
              >
                {widget.icon}
              </Box>
              <Typography component="h5" variant="caption" align="center">
                {widget.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default WidgetDrawer;
