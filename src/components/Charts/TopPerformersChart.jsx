import React, { useContext } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { MovieContext } from "../../contexts/MovieContext";

const TopPerformersChart = () => {
  const { movies } = useContext(MovieContext);

  // Sort movies by rating and get the top 5
  const topMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 5);

  // Extract data for the chart
  const chartData = {
    xAxis: [{ data: topMovies.map((movie) => movie.title), scaleType: "band" }],
    series: [{ data: topMovies.map((movie) => movie.rating) }],
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Top Rated Movies</h5>
        <BarChart
          xAxis={chartData.xAxis}
          series={chartData.series}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default TopPerformersChart;
