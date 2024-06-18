import { call, put, takeLatest } from 'redux-saga/effects';
import { LoginCredentialsState } from '../../types/login';
import { PayloadAction } from '@reduxjs/toolkit';
import { loginFailure, loginSuccess, loginTrigger, setShouldRedirect } from './loginSlice';
import loginApi from './api';
import { setSnackbar } from '../../providers/snackbarProviderSlice';
import { SnackbarType } from '../../types/common';

function* login(action: PayloadAction<LoginCredentialsState>) {
  const { response, error } = yield call(loginApi, action.payload);
  if (response) {
    yield put(loginSuccess(response));
    yield put(setShouldRedirect(true));
    yield put(setSnackbar({ type: SnackbarType.success, message: response.message }));
  } else {
    yield put(loginFailure(error));
  }
}

function* loginSaga() {
  yield takeLatest(loginTrigger.type, login);
}

export default loginSaga;
