import { MovieListResult } from "./movie-list-result";

export interface QueryMovieResult {
  page: number;
  results: MovieListResult[];
  total_results: number;
  total_pages: number;
}
