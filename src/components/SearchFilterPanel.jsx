import { useContext, useState } from "react";
import MovieContext from "../contexts/MovieContext";

export default function SearchFilterPanel() {
  const { setFilters } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, title: searchTerm }));
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={handleSearch}>
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
