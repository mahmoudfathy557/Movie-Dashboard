import React, { useContext, useState } from "react";
import MovieContext from "../contexts/MovieContext";

const MovieDetailsCard = () => {
  const { movies } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Movie Details</h5>
        {selectedMovie ? (
          <div>
            <h6>{selectedMovie.title}</h6>
            <p>Year: {selectedMovie.year}</p>
            <p>Rating: {selectedMovie.rating}</p>
            <p>Oscar Wins: {selectedMovie.oscarWins}</p>
          </div>
        ) : (
          <p>Select a movie to see details.</p>
        )}
        <ul className="list-group mt-3">
          {movies.map((movie) => (
            <li
              key={movie.id}
              className="list-group-item"
              onClick={() => handleMovieClick(movie)}
              style={{ cursor: "pointer" }}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
