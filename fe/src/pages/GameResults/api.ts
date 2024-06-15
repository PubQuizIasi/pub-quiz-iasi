import endpoints from '../../common/endpoints';
import { deleteRequest, getRequest, putRequest } from '../../http';
import { GameResultsFiltersState, SeasonLeaderboardPayload } from '../../types/gameResults';

const getGameResults = (params: GameResultsFiltersState) =>
  getRequest(endpoints.gameResults, params);

const updateGameResults = (params: GameResultsFiltersState) =>
  putRequest(endpoints.gameResults, params);

const deleteGameResults = (params: GameResultsFiltersState) =>
  deleteRequest(endpoints.gameResults, params);

const getGameResultsFilters = () => getRequest(endpoints.seasons);

const getSeasonLeaderboard = (params: SeasonLeaderboardPayload) =>
  getRequest(endpoints.seasonLeaderboard, params);

export {
  getGameResults,
  updateGameResults,
  deleteGameResults,
  getGameResultsFilters,
  getSeasonLeaderboard,
};
