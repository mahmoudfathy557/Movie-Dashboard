import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        "https://www.freetestapi.com/api/v1/movies"
      );
      setMovies(response.data);
    };
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};
