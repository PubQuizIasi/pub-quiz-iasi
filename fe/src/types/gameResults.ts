import { Dispatch, SetStateAction } from 'react';
import { SeasonLeaderboardType } from './seasonLeaderboard';

export enum GameInfoFields {
  game = 'game',
  season = 'season',
  numberOfTeams = 'numberOfTeams',
  rounds = 'rounds',
}

export enum NewGameStep {
  gameInfo = 'gameInfo',
  gameResults = 'gameResults',
}

export enum GameResultsFields {
  teamName = 'teamName',
  joker = 'joker',
  points = 'points',
}

export type GameInfoState = {
  game: string;
  season: string;
  numberOfTeams: string;
  rounds: string[];
};

export type GameInfoProps = {
  gameInfo: GameInfoState;
  changeGameInfo: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof typeof GameInfoFields,
    roundIndex?: number
  ) => void;
  changeStep?: (step: NewGameStep) => void;
  className?: string;
};

export type ResultsTableProps = {
  gameInfo: GameInfoState;
  results: Result[];
  changeStep?: (step: NewGameStep) => void;
  updateResults?: UpdateResultsFn;
  submit?: () => void;
  submitTranslationPath?: string;
  deleteGame?: (season: number, game: number) => void;
  loading?: boolean;
  isAdmin?: boolean;
  children?: JSX.Element;
};

export type Result = {
  teamName: string;
  joker: number;
  points: number[];
};

export type UpdateResultsFn = (
  teamIndex: number,
  roundIndex: number,
  value: string | number | null,
  field?: string
) => void;

export type GameResultsType = GameInfoState & {
  results: Result[];
  _id: string | null;
};

export type NewGameResultState = {
  fields: GameInfoState & { results: Result[] };
  loading: boolean;
};

export type NewGameResultsPayload = GameInfoState & {
  results: Result[];
};

export type GameResultsState = {
  filters: GameResultsFiltersState;
  filtersData: Season[];
  currentGameData: GameResultsType;
  updatedGameData: GameResultsType;
  seasonLeaderboard: SeasonLeaderboardType | null;
  loading: boolean;
  deleteLoading: boolean;
  filtersLoading: boolean;
};

export type Season = {
  season: number;
  games: number[];
};

export type GameResultsFiltersState = {
  season: number | null;
  game: number | null;
};

export type SeasonLeaderboardPayload = Pick<GameResultsFiltersState, 'season'>;

export enum GameResultsFiltersKeys {
  season = 'season',
  game = 'game',
}

export type ResultsRowProps = {
  teamIndex: number;
  results: Result[];
  isEditable?: boolean;
  rounds?: string[];
  updateResults?: UpdateResultsFn | undefined;
};

export type ResultsTableHeadProps = {
  isEditable?: boolean;
  rounds?: string[];
  seasonLeaderboard?: boolean;
};

export type RewardIconProps = {
  teamIndex: number;
  results?: Result[];
  showLast?: boolean;
};

export type RoundScoreProps = {
  isEditable?: boolean;
  teamIndex: number;
  updateResults: UpdateResultsFn | undefined;
  results: Result[];
  roundNumber: number;
};

export type DeleteGameModalProps = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  deleteGame: (season: number, game: number) => void;
  season: number;
  game: number;
};

export type UpdateGameResultsProps = {
  isAdmin: boolean;
};
