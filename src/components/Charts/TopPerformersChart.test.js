import React from "react";
import { render, screen } from "@testing-library/react";
import TopPerformersChart from "./TopPerformersChart";
import { useMovies } from "../../hooks/useMovies";
import { PieChart } from "@mui/x-charts/PieChart";

// Mock dependencies
jest.mock("../../hooks/useMovies");
jest.mock("@mui/x-charts/PieChart", () => ({
  PieChart: jest.fn(() => null),
}));

describe("TopPerformersChart Component", () => {
  const mockMovies = [
    { id: 1, title: "The Shawshank Redemption", rating: 9.3 },
    { id: 2, title: "Inception", rating: 8.8 },
    { id: 3, title: "The Dark Knight Rises", rating: 8.9 },
    { id: 4, title: "Interstellar", rating: 8.6 },
    { id: 5, title: "Pulp Fiction", rating: 8.9 },
    { id: 6, title: "Fight Club", rating: 8.8 },
  ];

  beforeEach(() => {
    useMovies.mockReturnValue(mockMovies);
    PieChart.mockClear();
  });

  test("renders the component with correct title", () => {
    render(<TopPerformersChart />);
    expect(screen.getByText("Top Rated Movies")).toBeInTheDocument();
  });

  test("displays top 5 movies sorted by rating descending", () => {
    render(<TopPerformersChart />);

    const pieChartData = PieChart.mock.calls[0][0].series[0].data;
    const expectedRatings = [9.3, 8.9, 8.9, 8.8, 8.8];

    expect(pieChartData).toHaveLength(5);
    expect(pieChartData.map((item) => item.value)).toEqual(expectedRatings);
  });

  test("handles movies with identical ratings", () => {
    const duplicateMovies = [
      { id: 1, title: "Movie A", rating: 8.5 },
      { id: 2, title: "Movie B", rating: 8.5 },
      { id: 3, title: "Movie C", rating: 8.5 },
    ];
    useMovies.mockReturnValue(duplicateMovies);

    render(<TopPerformersChart />);
    const pieChartData = PieChart.mock.calls[0][0].series[0].data;

    expect(pieChartData).toHaveLength(3);
    expect(pieChartData[0].value).toBe(8.5);
  });

  test("handles empty movies array", () => {
    useMovies.mockReturnValue([]);

    render(<TopPerformersChart />);
    const pieChartData = PieChart.mock.calls[0][0].series[0].data;

    expect(pieChartData).toHaveLength(0);
  });

  test("uses correct chart dimensions", () => {
    render(<TopPerformersChart />);

    const pieChartProps = PieChart.mock.calls[0][0];
    expect(pieChartProps.width).toBe(400);
    expect(pieChartProps.height).toBe(200);
  });
});
