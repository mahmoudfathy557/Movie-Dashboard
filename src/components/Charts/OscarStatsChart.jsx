import React, { useContext } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { MovieContext } from "../../contexts/MovieContext";

const OscarStatsChart = () => {
  const { movies } = useContext(MovieContext);

  // Aggregate Oscar wins by year
  const oscarData = movies.reduce((acc, movie) => {
    if (movie.oscarWins) {
      acc[movie.year] = (acc[movie.year] || 0) + movie.oscarWins;
    }
    return acc;
  }, {});

  // Extract data for the chart
  const years = Object.keys(oscarData).map(Number);
  const wins = Object.values(oscarData);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Oscar Statistics</h5>
        <LineChart
          xAxis={[{ data: years, scaleType: "linear", label: "Year" }]}
          series={[{ data: wins, label: "Oscar Wins" }]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default OscarStatsChart;
