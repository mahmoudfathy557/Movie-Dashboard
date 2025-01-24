import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { MovieProvider } from "./contexts/MovieContext";
import Dashboard from "./pages/Dashboard";
const App = () => (
  <MovieProvider>
    <Dashboard />
  </MovieProvider>
);

export default App;
