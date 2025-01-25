import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://www.freetestapi.com/api/v1/movies"
      );
      setMovies(response.data);
      setFilteredMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
    <MovieContext.Provider
      value={{ movies: filteredMovies, setFilters, loading }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
