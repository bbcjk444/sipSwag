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
      subject: "순발",
      A: sessionStorage.getItem("alacrity"),
      fullMark: 100,
    },
    {
      subject: "사고",
      A: sessionStorage.getItem("ability"),
      fullMark: 100,
    },
    {
      subject: "관찰",
      A: sessionStorage.getItem("observation"),
      fullMark: 100,
    },
    {
      subject: "논리",
      A: sessionStorage.getItem("logical"),
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
      <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
    </RadarChart>
  );
}

export default Haxagon;
