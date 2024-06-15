export interface SeasonLeaderboardResult {
  teamName: string;
  gameResult: {
    game: number;
    points: number;
  }[];
  totalPoints: number;
}

export interface SeasonLeaderboardType {
  season: number;
  results: SeasonLeaderboardResult[];
}
