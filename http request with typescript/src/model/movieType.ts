export type dummyMoviesType = dummyMovieType[];

export type dummyMovieType = {
  id: number;
  title: string;
  openingText: string;
  releaseDate: string;
};

export type dummyMovieWithoutIdType = Omit<dummyMovieType, "id">;
