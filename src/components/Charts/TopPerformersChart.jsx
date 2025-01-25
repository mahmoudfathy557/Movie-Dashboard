import { useMovies } from "../../hooks/useMovies";

export default function TopPerformersChart() {
  const movies = useMovies();

  const topMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 7);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Top Rated Movies</h5>
        <ul className="list-group">
          {topMovies.map((movie) => (
            <li
              key={movie.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{movie.title}</span>
              <span className="badge bg-primary rounded-pill">
                {movie.rating}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
