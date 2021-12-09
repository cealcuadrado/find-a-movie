import { PersonTvResult } from './person-list-result/person-tv-result';
import { PersonMovieResult } from './person-list-result/person-movie-result';

export interface PersonListResult {
  profile_path: string | null;
  adult: boolean;
  id: number;
  known_for: PersonMovieResult | PersonTvResult;
  name: string;
  popularity: number;
}
