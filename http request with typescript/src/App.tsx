import React, { useState } from "react";

import fetchMoviesHandler from "./api/fetchMoviesHandler";
import MoviesList from "./components/MoviesList";
import { transformedMovieType } from "./model/movieType";
import "./App.css";

function App() {
  const [movies, setMovies] = useState<transformedMovieType[]>([]);

  function fetchingMoviesHandler() {
    fetchMoviesHandler().then((transformedMovies) => {
      setMovies(transformedMovies);
    });
  }

  return (
    <>
      <section>
        <button onClick={fetchingMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}

export default App;
