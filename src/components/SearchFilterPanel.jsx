import { useContext, useState } from "react";
import MovieContext from "../contexts/MovieContext";
import { useMovies } from "../hooks/useMovies";
import { Loader } from "./Loader";

export default function SearchFilterPanel() {
  const { setFilters } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { loading } = useMovies();
  const handleSearch = (e) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, title: searchTerm }));
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={handleSearch}>
          {loading && <Loader size={20} />}
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
