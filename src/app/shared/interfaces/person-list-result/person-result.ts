export interface PersonResult {
  poster_path: string | null;
  adult?: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  title?: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video?: boolean;
  vote_average: number;
  first_air_date?: string;
  origin_country?: string[];
  name?: string;
  original_name?: string;
}
