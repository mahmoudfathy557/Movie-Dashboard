import React from "react";
import { render, screen } from "@testing-library/react";
import OscarStatsChart from "./OscarStatsChart";
import * as useMoviesHook from "../../hooks/useMovies";

jest.mock("../../hooks/useMovies");

describe("OscarStatsChart Component", () => {
  const mockMovies = [
    {
      id: 1,
      title: "Movie 1",
      awards: "Won 3 Oscars",
      year: 2020,
    },
    {
      id: 2,
      title: "Movie 2",
      awards: "Nominated for 2 Oscars",
      year: 2021,
    },
  ];

  beforeEach(() => {
    useMoviesHook.useMovies = jest.fn().mockReturnValue(mockMovies);
  });

  test("renders chart with correct awards data", () => {
    render(<OscarStatsChart />);
    expect(screen.getByText(/Oscar/)).toBeInTheDocument(); // Update with actual chart title
  });

  test("handles movies without awards", () => {
    const moviesWithoutAwards = [
      ...mockMovies,
      { id: 3, title: "No Awards Movie" },
    ];
    useMoviesHook.useMovies.mockReturnValue(moviesWithoutAwards);

    render(<OscarStatsChart />);
    // Add proper assertions here
  });
});
