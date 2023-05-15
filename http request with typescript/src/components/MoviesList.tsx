import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";
import { dummyMoviesType } from "../model/movieType";

interface OwnProps {
  movies: dummyMoviesType;
}

const MovieList = ({ movies }: OwnProps) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
