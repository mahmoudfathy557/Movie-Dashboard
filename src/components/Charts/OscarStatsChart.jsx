import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MovieContext } from "../../contexts/MovieContext";

const OscarStatsChart = () => {
  const { movies } = useContext(MovieContext);
  const oscarData = movies.reduce((acc, movie) => {
    if (movie.oscarWins) {
      acc[movie.year] = (acc[movie.year] || 0) + movie.oscarWins;
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(oscarData),
    datasets: [
      {
        label: "Oscar Wins by Year",
        data: Object.values(oscarData),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Oscar Statistics</h5>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default OscarStatsChart;
