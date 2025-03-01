import React from "react";
import { useMovies } from "../hooks/useMovies";
import MovieDetailsCard from "./MovieDetailsCard";
import { Loader } from "./Loader";

export default function MovieCards() {
  const { movies, loading } = useMovies();

  if (loading) return <Loader />;
  return (
    <div className="row">
      <h1>My Movies</h1>
      {movies.map((movie, idx) => (
        <div key={idx} className="col-6 col-md-4 col-lg-3 mb-4">
          <MovieDetailsCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
