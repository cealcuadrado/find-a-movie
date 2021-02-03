import { NumberValueAccessor } from '@angular/forms';
import { MovieListResult } from './movie-list-result';

export interface QuerySearchResult {
  page: number;
  results: MovieListResult[];
  total_results: number;
  total_pages: number;
}
