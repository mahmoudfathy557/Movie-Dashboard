import React, { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const SearchFilterPanel = () => {
  const { movies } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Search Movies</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="list-group mt-3">
          {filteredMovies.map((movie) => (
            <li key={movie.id} className="list-group-item">
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilterPanel;
