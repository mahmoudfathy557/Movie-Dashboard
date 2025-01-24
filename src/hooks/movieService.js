export const fetchMovies = async () => {
  const response = await fetch("https://www.freetestapi.com/api/v1/movies");
  const data = await response.json();
  console.log("🚀 ~ fetchMovies ~ response:", data);
  if (!response.ok) throw new Error("Failed to fetch dataset");
  return data;
};
