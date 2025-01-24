import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        "https://www.freetestapi.com/api/v1/movies"
      );
      setMovies(response.data);
      setFilteredMovies(response.data);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    let filtered = movies;
    if (filters.title) {
      filtered = filtered.filter((m) =>
        m.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }
    if (filters.year) {
      filtered = filtered.filter((m) => m.year === filters.year);
    }
    setFilteredMovies(filtered);
  }, [filters, movies]);

  return (
    <MovieContext.Provider value={{ movies: filteredMovies, setFilters }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
