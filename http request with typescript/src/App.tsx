import React, { useState, useEffect, useCallback } from "react";

import fetchMoviesAPI from "./api/fetchMoviesAPI";
import MoviesList from "./components/MoviesList";
import { transformedMovieType } from "./model/movieType";
import "./App.css";

function App() {
  const [movies, setMovies] = useState<transformedMovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchingMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const transformedMovies = await fetchMoviesAPI();
      setMovies(transformedMovies);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchingMoviesHandler();
  }, [fetchingMoviesHandler]);

  return (
    <>
      <section>
        <button onClick={fetchingMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>영화없음</p>}
        {isLoading && <p>로딩중...</p>}
      </section>
    </>
  );
}

export default App;
