import { PersonResult } from './person-list-result/person-result';

export interface PersonListResult {
  profile_path: string | null;
  adult: boolean;
  id: number;
  known_for: PersonResult[];
  name: string;
  popularity: number;
}
