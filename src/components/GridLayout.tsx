import { CssBaseline, Paper } from "@mui/material";
import { Responsive, WidthProvider } from "react-grid-layout";
import Styled from "styled-components";
import ReactCharts from "./ReactCharts";
import {
  animation,
  area_chart,
  dotted_bar,
  line_chart,
  line_temp,
  multi_x_axis,
  stack_bar,
} from "./utility/chart_property";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";


const ResponsiveGridLayout = WidthProvider(Responsive);

const charts = [
  { id: 1, option: line_chart },
  { id: 2, option: area_chart },
  { id: 3, option: multi_x_axis },
  { id: 4, option: stack_bar },
  { id: 5, option: line_temp },
  { id: 6, option: dotted_bar },
  { id: 7, option: animation },
];

const getLayouts = () => {
  const savedLayouts = localStorage.getItem("grid_layout");
  return savedLayouts ? JSON.parse(savedLayouts) : { lg: charts };
};

// const GridItemWrapper = Styled.div`background:#f5f5f5`;
const GridItemContent = Styled.div`padding:8px`;
const Root = Styled.div`padding:6px`;

export default function GridLayout(this: any) {
  const handleLayoutChange = (layout: any, layouts: any) => {
    localStorage.setItem("grid_layout", JSON.stringify(layouts));
  };
``
  return (
    <div style={{ marginBottom: "50px" }}>
      <CssBaseline />
      <Root>
        <ResponsiveGridLayout
          layouts={getLayouts()}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
          rowHeight={300}
          width={1000}
          onLayoutChange={handleLayoutChange}
        >
          {charts.map((chart) => (
            <Paper key={chart.id}>
              <div>
                <ReactCharts option={chart.option} />
              </div>
            </Paper>
          ))}
        </ResponsiveGridLayout>
      </Root>
    </div>
  );
}
