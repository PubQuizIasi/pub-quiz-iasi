import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import newGameResultsReducer from '../pages/GameResults/NewGameResults/newGameResultsSlice';
import gameResultsReducer from '../pages/GameResults/gameResultsSlice';
import snackbarReducer from '../providers/snackbarProviderSlice';
import loginReducer from '../pages/Login/loginSlice';
import themeReducer from '../components/ThemeSelector/themeSelectorSlice';
import contactReducer from '../pages/Contact/contactSlice';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();

const loginConfig = { key: 'login', storage, blacklist: ['loading'] };

const themeConfig = { key: 'theme', storage };

export const store = configureStore({
  reducer: {
    newGameResults: newGameResultsReducer,
    gameResults: gameResultsReducer,
    snackbar: snackbarReducer,
    login: persistReducer(loginConfig, loginReducer),
    contact: contactReducer,
    theme: persistReducer(themeConfig, themeReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

sagas.forEach((saga) => sagaMiddleware.run(saga));
