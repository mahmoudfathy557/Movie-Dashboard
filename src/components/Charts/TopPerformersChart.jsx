import React from "react";
import { useMovies } from "../../hooks/useMovies";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";

export default function TopPerformersChart() {
  const { movies, loading } = useMovies();
  const topMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 5);

  const data = topMovies.map((movie) => ({
    value: movie.rating,
    label:
      movie.title.length > 10
        ? movie.title.substring(0, 10) + "..."
        : movie.title,
  }));

  if (loading) return <Loader />;

  return (
    <Card className="mb-4">
      <CardContent>
        <Typography variant="h5" component="div">
          Top Rated Movies
        </Typography>
        <PieChart
          width={400}
          height={200}
          series={[
            {
              data: data,
            },
          ]}
        />
      </CardContent>
    </Card>
  );
}
