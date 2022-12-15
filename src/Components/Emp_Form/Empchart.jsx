import axios from "axios";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Empchart = () => {
  const [chart, setchart] = useState([]);

  axios
    .get("https://localhost:7071/api/CrudApi")
    .then((res) => setchart(res.data));

  return (
    <ResponsiveContainer width="50%" height="50%">
      <BarChart
        width={50}
        height={50}
        data={chart}
        margin={{
          top: 90,
          right: 30,
          left: 80,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="team" />
        <YAxis dataKey="salary" />
        <Tooltip />
        <Legend />
        <Bar dataKey="employeeName" fill="#8885d8" />
        <Bar dataKey="salary" fill="#82ca9d" />
        <Bar dataKey="email" fill="#8884d8" />
        <Bar dataKey="team" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Empchart;
