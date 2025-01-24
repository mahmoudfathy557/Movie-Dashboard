import { BarChart } from "@mui/x-charts/BarChart";
import { useMovies } from "../../hooks/useMovies";

export default function OscarStatsChart() {
  const movies = useMovies();

  const processData = () => {
    const years = [...new Set(movies.map((m) => m.year))].sort();
    const wins = years.map((year) =>
      movies
        .filter((m) => m.year === year)
        .reduce((acc, m) => acc + (m.oscarsWon || 0), 0)
    );
    return { years, wins };
  };

  const { years, wins } = processData();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Oscar Wins by Year</h5>
        <BarChart
          xAxis={[{ scaleType: "band", data: years }]}
          series={[{ data: wins }]}
          height={300}
        />
      </div>
    </div>
  );
}
