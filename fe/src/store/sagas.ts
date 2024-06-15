import contactSaga from '../pages/Contact/contactSaga';
import newGameResultsSaga from '../pages/GameResults/NewGameResults/newGameResultsSaga';
import {
  deleteGameResultsSaga,
  gameResultsSaga,
  updateGameResultsSaga,
  getGameResultsFiltersSaga,
} from '../pages/GameResults/gameResultsSaga';
import { seasonLeaderboardSaga } from '../pages/GameResults/SeasonLeaderboard/seasonLeaderboardSaga';
import loginSaga from '../pages/Login/loginSaga';

export default [
  newGameResultsSaga,
  gameResultsSaga,
  updateGameResultsSaga,
  deleteGameResultsSaga,
  getGameResultsFiltersSaga,
  loginSaga,
  contactSaga,
  seasonLeaderboardSaga,
];
