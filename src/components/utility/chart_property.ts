import * as echarts from "echarts";
import { ReactEChartsProps } from "../ReactCharts";

const lineColor = ["#16a652", "#EE6666"];

export const line_chart: ReactEChartsProps["option"] = {
  color: lineColor,
  toolbox: {
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      dataView: { readOnly: false },
      magicType: { type: ["line", "bar", "stack"] },
      restore: {},
      saveAsImage: {},
    },
  },
  tooltip: {
    trigger: "axis",
  },
  grid: { left: "5%", right: "5%", bottom: "3%", containLabel: true },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  legend: {
    data: ["Email Marketing", "Affiliate Advertising"],
    left: 10,
  },
  series: [
    {
      name: "Email Marketing",
      type: "line",
      stack: "Total",
      smooth: true,
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Affiliate Advertising",
      type: "line",
      stack: "Total",
      smooth: true,
      data: [220, 182, 191, 104, 290, 330, 310],
    },
  ],
};

const areaColor = ["#5632a8", "#16a652", "#ba133f"];
export const area_chart: ReactEChartsProps["option"] = {
  color: areaColor,
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      dataView: { readOnly: false },
      magicType: { type: ["line", "bar", "stack"] },
      restore: {},
      saveAsImage: {},
    },
  },
  tooltip: {
    trigger: "axis",
  },
  grid: { left: "5%", right: "5%", bottom: "3%", containLabel: true },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  legend: {
    data: ["Email Marketing", "Affiliate Advertising", "Video Advertising"],
    left: 10,
  },
  series: [
    {
      name: "Email Marketing",
      type: "line",
      stack: "Total",
      areaStyle: {},
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Affiliate Advertising",
      type: "line",
      stack: "Total",
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Advertising",
      type: "line",
      stack: "Total",
      areaStyle: {},
      data: [150, 232, 201, 154, 190, 330, 410],
    },
  ],
};

const colors = ["#5470C6", "#EE6666"];

export const multi_x_axis: ReactEChartsProps["option"] = {
  color: colors,
  tooltip: {
    trigger: "none",
    axisPointer: {
      type: "cross",
    },
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      dataView: { readOnly: false },
      magicType: { type: ["line", "bar", "stack"] },
      restore: {},
      saveAsImage: {},
    },
  },
  legend: {left: 10,},
  grid: {
    top: 70,
    bottom: 50,
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1],
        },
      },
      axisPointer: {
        label: {
          formatter: function (params: any) {
            return (
              "Precipitation  " +
              params.value +
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          },
        },
      },

      // prettier-ignore
      data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
    },
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[0],
        },
      },
      axisPointer: {
        label: {
          formatter: function (params: any) {
            return (
              "Precipitation  " +
              params.value +
              (params.seriesData.length ? "：" + params.seriesData[0].data : "")
            );
          },
        },
      },

      // prettier-ignore
      data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Precipitation(2015)",
      type: "line",
      xAxisIndex: 1,
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
    },
    {
      name: "Precipitation(2016)",
      type: "line",
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [
        3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7,
      ],
    },
  ],
};

// Generate data
let category = [] as any;
let dottedBase = +new Date();
let lineData = [] as any;
let barData = [] as any;

for (let i = 0; i < 20; i++) {
  let date = new Date((dottedBase += 3600 * 24 * 1000));
  category.push(
    [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
  );
  let b = Math.random() * 200;
  let d = Math.random() * 200;
  barData.push(b);
  lineData.push(d + b);
}

// option
export const dotted_bar: ReactEChartsProps["option"] = {
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      dataView: { readOnly: false },
      magicType: { type: ["line", "bar", "stack"] },
      restore: {},
      saveAsImage: {},
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["line", "bar"],
    left: 10,
  },
  xAxis: {
    data: category,
    axisLine: {},
  },
  yAxis: {
    splitLine: { show: false },
    axisLine: {},
  },
  series: [
    {
      name: "line",
      type: "line",
      smooth: true,
      showAllSymbol: true,
      symbol: "emptyCircle",
      symbolSize: 15,
      data: lineData,
    },
    {
      name: "bar",
      type: "bar",
      barWidth: 10,
      itemStyle: {
        borderRadius: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#14c8d4" },
          { offset: 1, color: "#43eec6" },
        ]),
      },
      data: barData,
    },
    {
      name: "line",
      type: "bar",
      barGap: "-100%",
      barWidth: 10,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(20,200,212,0.5)" },
          { offset: 0.2, color: "rgba(20,200,212,0.2)" },
          { offset: 1, color: "rgba(20,200,212,0)" },
        ]),
      },
      z: -12,
      data: lineData,
    },
    {
      name: "dotted",
      type: "pictorialBar",
      symbol: "rect",
      itemStyle: {
        color: "#0f375f",
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: lineData,
    },
  ],
};

export const stack_bar: ReactEChartsProps["option"] = {
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      dataView: { readOnly: false },
      magicType: { type: ["line", "bar", "stack"] },
      restore: {},
      saveAsImage: {},
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {left: 10,},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: "category",
    data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
  },
  series: [
    {
      name: "2011",
      type: "bar",
      data: [18203, 23489, 29034, 104970, 131744, 630230],
    },
    {
      name: "2012",
      type: "bar",
      data: [19325, 23438, 31000, 121594, 134141, 681807],
    },
  ],
};

export const line_temp: ReactEChartsProps["option"] = {
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      dataView: { readOnly: false },
      magicType: { type: ["line", "bar", "stack"] },
      restore: {},
      saveAsImage: {},
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    // prettier-ignore
    data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
  },
  yAxis: {
    type: "value",
    min: 5,
    max: 40,
    interval: 5,
    axisLabel: {
      formatter: "{value} °C",
    },
    axisPointer: {
      snap: true,
    },
  },
  visualMap: {
    show: true,
    dimension: 1,
    pieces: [
      {
        gte: 1,
        lte: 15,
        color: "lightblue",
      },
      {
        gt: 15,
        lte: 22,
        color: "#4287f5",
      },
      {
        gt: 22,
        lte: 26,
        color: "green",
      },
      {
        gt: 26,
        color: "red",
      },
    ],
  },
  series: [
    {
      name: "Temperature",
      type: "line",
      smooth: true,
      // prettier-ignore
      data: [15,10,19,6,21,22,23,24,25,26,27,20,22,23,30,23,25,27,30,24],
      markArea: {
        itemStyle: {
          color: "#ffe8ea",
        },
        data: [
          [
            {
              name: "Hot",
              yAxis: "26",
            },
            {
              yAxis: "40",
            },
          ],
          [
            {
              name: "Very Cool",
              yAxis: "1",
            },
            {
              yAxis: "15",
            },
          ],
        ],
      },
    },
  ],
};

export const animation: ReactEChartsProps["option"] = {
  graphic: {
    elements: [
      {
        type: "text",
        left: "center",
        top: "center",
        style: {
          text: "The Things Mate",
          fontFamily: 'Times New Roman',
          fontSize: 40,
          fontWeight: "bold",
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: "transparent",
          stroke: "#000",
          lineWidth: 1,
        },
        keyframeAnimation: {
          duration: 3000,
          loop: true,
          keyframes: [
            {
              percent: 0.7,
              style: {
                fill: "transparent",
                lineDashOffset: 200,
                lineDash: [200, 0],
              },
            },
            {
              // Stop for a while.
              percent: 0.8,
              style: {
                fill: "transparent",
              },
            },
            {
              percent: 1,
              style: {
                fill: "red",
              },
            },
          ],
        },
      },
    ],
  },
};
