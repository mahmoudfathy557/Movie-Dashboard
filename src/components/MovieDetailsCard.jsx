import React from "react";
import { useMovies } from "../hooks/useMovies";

export default function MovieDetailsCard({ movie }) {
  const movies = useMovies();

  return (
    <div key={movie.id}>
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front">
            <img
              src={movie.poster}
              alt={movie.title}
              className="img-fluid rounded"
              style={{ height: "400px", width: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Back Side */}
          <div className="flip-card-back p-3">
            <h5 className="mb-3">{movie.title}</h5>
            <div className="card-text">
              <p>
                <strong>Plot:</strong> {movie.plot}
              </p>
              <div className="list-group">
                <div className="list-group-item">
                  <strong>Country:</strong> {movie.country}
                </div>
                <div className="list-group-item">
                  <strong>Language:</strong> {movie.language}
                </div>
                <div className="list-group-item">
                  <strong>Year:</strong> {movie.year}
                </div>
                <div className="list-group-item">
                  <strong>Rating:</strong> {movie.rating}/10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
