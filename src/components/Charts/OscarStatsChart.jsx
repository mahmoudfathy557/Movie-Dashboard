import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useMovies } from "../../hooks/useMovies";
import { Loader } from "../Loader";

export default function OscarStatsChart() {
  const { movies, loading } = useMovies();

  const processAwardsData = () => {
    const movieData = movies
      .filter((movie) => movie.awards) // Only movies with awards
      .map((movie) => {
        const awards = movie.awards;
        const isWin = awards.includes("Won");
        const isNomination = awards.includes("Nominated");
        const countMatch = awards.match(/\d+/);
        const count = countMatch ? parseInt(countMatch[0]) : 0;

        return {
          title: movie.title,
          nominations: isNomination ? count : 0,
          wins: isWin ? count : 0,
        };
      })
      .filter((movie) => movie.nominations > 0 || movie.wins > 0); // Only movies with actual numbers

    return movieData;
  };

  const awardsData = processAwardsData();

  if (loading) return <Loader />;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Movie Oscar Nominations vs Wins</h5>
        <div style={{ overflowX: "auto", maxWidth: "100%" }}>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: awardsData.map((m) => m.title),
                label: "Movies",
                tickLabelStyle: {
                  angle: 45,
                  textAnchor: "start",
                  fontSize: 12,
                },
              },
            ]}
            series={[
              {
                data: awardsData.map((m) => m.nominations),
                label: "Nominations",
                color: "#ffc107",
              },
              {
                data: awardsData.map((m) => m.wins),
                label: "Wins",
                color: "#198754",
              },
            ]}
            height={400}
            width={Math.max(awardsData.length * 100, 800)}
            margin={{ left: 70, bottom: 100 }}
          />
        </div>
      </div>
    </div>
  );
}
