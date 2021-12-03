import { CastCredit } from './cast-credit';
import { CrewCredit } from './crew-credit';

export interface PersonMovieCredits {
  cast: CastCredit[];
  crew: CrewCredit[];
}
