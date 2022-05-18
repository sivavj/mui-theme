import React, { useEffect, useRef, useState } from "react";
import { init, getInstanceByDom } from "echarts";
import type { CSSProperties } from "react";
import type { EChartsOption, ECharts, SetOptionOpts } from "echarts";
import { useElementSize } from "./utility/useResizeObserver";
import { Paper } from "@mui/material";

export interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: "light" | "dark";
}

export default function ReactCharts({
  option,
  style,
  settings,
  loading,
  theme,
}: ReactEChartsProps): JSX.Element {
  const { ref, width, height } = useElementSize();
  const chartRef = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<ECharts | undefined>();
  useEffect(() => {
    //initialize chart
    let _chart: ECharts | undefined;
    if (chartRef.current !== null) {
      _chart = init(chartRef.current, theme);
      setChart(_chart);
    }

    //add chart resize listener
    function resizeChart() {
      _chart?.resize();
    }
    window.addEventListener("resize", resizeChart);

    //return cleanup function
    return () => {
      _chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    chart?.resize();
  }, [width, height]);

  useEffect(() => {
    //update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    //update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading, theme]);
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        position: "absolute",
        top: 0,
        bottom: 40,
        left: 0,
      }}
    >
      <div 
        ref={chartRef}
        style={{ width: width, height: "100%", ...style }}
      />
    </div>
  );
}
