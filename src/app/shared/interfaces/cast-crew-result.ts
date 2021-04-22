import { Crew } from './crew';
import { Cast } from './cast';

export interface CastCrewResult {
  id: number;
  cast: Cast[];
  crew: Crew[];
}
