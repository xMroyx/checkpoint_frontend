export interface Country {
  code: string;
  name: string;
  emoji: string;
}

export interface GetCountriesResponse {
  countries: Country[];
}
