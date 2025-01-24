import React, { useContext } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { MovieContext } from "../../contexts/MovieContext";

const TopPerformersChart = () => {
  const { movies } = useContext(MovieContext);

  const topMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Top Rated Movies</h5>
        <ul className="list-group">
          {topMovies.map((movie) => (
            <li key={movie.id} className="list-group-item">
              {movie.title} - {movie.rating}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopPerformersChart;
