import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function ForecastChart() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=4631ef4177fb13d78b2dc0b0c1650420&units=metric"
      );
      const json = await response.json();
      const weatherData = json.list;

      var tempData = [];

      weatherData.map((item) => {
        tempData.push({
          date: item.dt_txt,
          temperature: item.main.temp,
        });

        return tempData;
      });

      setdata(tempData);
    };
    fetchData();
  }, []);

  return (
    <LineChart width={800} height={350} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis dataKey="temperature" />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
