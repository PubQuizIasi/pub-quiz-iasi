import { RootState } from '../../store/types';
import { GAME_RESULTS_FILTERS_OVERALL_RANKING } from '../../types/common';

const selectCurrentGameData = (state: RootState) => state.gameResults.currentGameData;

const selectUpdatedGameData = (state: RootState) => state.gameResults.updatedGameData;

const selectLoading = (state: RootState) => state.gameResults.loading;

const selectFilters = (state: RootState) => state.gameResults.filters;

const selectFiltersData = (state: RootState) => state.gameResults.filtersData;

const selectFiltersLoading = (state: RootState) => state.gameResults.filtersLoading;

const selectSeasonLeaderboard = (state: RootState) => state.gameResults.seasonLeaderboard;

const selectIsSeasonLeaderboard = (state: RootState) =>
  state.gameResults.filters.game === GAME_RESULTS_FILTERS_OVERALL_RANKING;

export {
  selectCurrentGameData,
  selectUpdatedGameData,
  selectLoading,
  selectFilters,
  selectFiltersData,
  selectFiltersLoading,
  selectSeasonLeaderboard,
  selectIsSeasonLeaderboard,
};
