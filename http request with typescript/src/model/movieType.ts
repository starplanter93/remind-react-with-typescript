export type dummyMoviesType = dummyMovieType[];

export type dummyMovieType = {
  id: number;
  title: string;
  openingText: string;
  releaseDate: string;
};

export type dummyMovieWithoutIdType = Omit<dummyMovieType, "id">;

export type movieDataType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starship: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export type transformedMovieType = {
  id: string;
  title: string;
  openingText: string;
  releaseDate: string;
};
