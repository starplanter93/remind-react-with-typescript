import React from "react";

import classes from "./Movie.module.css";
import { dummyMovieWithoutIdType } from "../model/movieType";

interface OwnProps extends dummyMovieWithoutIdType {}

function Movie({ title, releaseDate, openingText }: OwnProps) {
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
}

export default Movie;
