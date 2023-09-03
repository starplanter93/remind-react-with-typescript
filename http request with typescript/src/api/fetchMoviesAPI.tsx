import axios from "axios";
import { movieDataType } from "../model/movieType";

async function fetchMoviesAPI() {
  const res = await axios.get("https://swapi.py4e.com/api/films/");
  const transformedMovies = res.data.results.map((movieData: movieDataType) => {
    return {
      id: movieData.episode_id,
      title: movieData.title,
      openingText: movieData.opening_crawl,
      releaseDate: movieData.release_date,
    };
  });
  return transformedMovies;
}

export default fetchMoviesAPI;
