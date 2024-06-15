import { PayloadAction } from '@reduxjs/toolkit';
import { GameResultsFiltersState } from '../../../types/gameResults';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getSeasonLeaderboard } from '../api';
import {
  getSeasonLeaderboardFailure,
  getSeasonLeaderboardSuccess,
  getSeasonLeaderboardTrigger,
} from '../gameResultsSlice';
import { setSnackbar } from '../../../providers/snackbarProviderSlice';
import { SnackbarType } from '../../../types/common';

function* seasonLeaderboard(action: PayloadAction<Pick<GameResultsFiltersState, 'season'>>) {
  const { response } = yield call(getSeasonLeaderboard, action.payload);

  if (response) {
    yield put(getSeasonLeaderboardSuccess(response));
  } else {
    yield put(getSeasonLeaderboardFailure());
    yield put(setSnackbar({ type: SnackbarType.error }));
  }
}

export function* seasonLeaderboardSaga() {
  yield takeLatest(getSeasonLeaderboardTrigger.type, seasonLeaderboard);
}
