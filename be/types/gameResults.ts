export type GameResultType = {
  season: number;
  game: number;
  numberOfTeams: number;
  results: Result[];
  rounds: string[];
};

export type UpdateGameResultType = GameResultType & {
  previousSeason: number;
  previousGame: number;
};

export type Result = {
  teamName: string;
  joker: number;
  points: number[];
};

export type SeasonType = {
  season: number;
  games: number[];
};
