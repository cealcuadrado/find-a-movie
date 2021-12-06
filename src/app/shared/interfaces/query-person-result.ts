import { PersonListResult } from "./person-list-result";

export interface QueryPersonResult {
  page: number;
  results: PersonListResult[];
  total_results: number;
  total_pages: number;
}
