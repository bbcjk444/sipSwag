import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

function Haxagon() {
  const data = [
    {
      subject: "관찰",
      A: 15,
      B: 15,
      fullMark: 100,
    },
    {
      subject: "사고",
      A: 98,
      B: 13,
      fullMark: 100,
    },
    {
      subject: "통찰",
      A: 86,
      B: 13,
      fullMark: 100,
    },
    {
      subject: "이해",
      A: 99,
      B: 100,
      fullMark: 100,
    },
    // {
    //   subject: "논리",
    //   A: 85,
    //   B: 90,
    //   fullMark: 100,
    // },
    // {
    //   subject: "순발력",
    //   A: 65,
    //   B: 85,
    //   fullMark: 100,
    // },
  ];

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={100}
      width={500}
      height={400}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={0} domain={[0, 100]} />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.4}
      />

      <Legend />
    </RadarChart>
  );
}

export default Haxagon;
