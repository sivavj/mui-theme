import React from "react";
import {
  Grid,
  Box,
  CardActionArea,
  Card,
  Avatar,
  Typography,
  styled,
  useTheme,
  CardContent,
} from "@mui/material";
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

export interface WidgetConfig {
  icon: React.ReactNode;
  text: string;
  type: WidgetType;
}

export const widgetList: WidgetConfig[] = [
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

export default function WidgetTiles({
  onWidgetSelected,
}: {
  onWidgetSelected: any;
}) {
  return (
    <div>
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
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center"

                  }}
                >
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      color: "primary.main",
                      background: "secondary.main",
                      "&:hover": { color: "secondary.main" },
                    }}
                  >
                    {widget.icon}
                  </Avatar>
                  {/* <Typography component="h5" variant="caption" align="center">
                    {widget.text}
                  </Typography> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
