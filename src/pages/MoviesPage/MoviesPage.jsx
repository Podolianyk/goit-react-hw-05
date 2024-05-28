import { toast, Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getsearchMovie } from "./../../tmdb-api.js";
import SearchForm from "./../../components/SearchForm/SearchForm";
import Loader from "./../../components/Loader/Loader.jsx";
import MovieList from "./../../components/MovieList/MovieList.jsx";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get("movieTitle") ?? "";

  useEffect(() => {
    if (!query) return;

    async function asyncWrapper() {
      try {
        setIsLoading(true);
        const dataOfMovies = await getsearchMovie(query);
        setSearchMovies(dataOfMovies);
      } catch (error) {
        return toast.error("This is an error! Please try again later!");
      } finally {
        setIsLoading(false);
      }
    }
    asyncWrapper();
  }, [query]);

  const getQuery = (query) => {
    setQuery(query);
    setSearchMovies([]);
    searchParams.set(movieTitle, query);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchForm onSubmit={getQuery} />
      {isLoading && <Loader />}
      {searchMovies.length > 0 && <MovieList data={searchMovies} />}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
