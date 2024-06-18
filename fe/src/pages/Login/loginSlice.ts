/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginCredentialsState, LoginState } from '../../types/login';

const initialState: LoginState = {
  credentials: { username: '', password: '' },
  role: null,
  loading: false,
  error: null,
  shouldRedirect: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginTrigger: (state, _action: PayloadAction<LoginCredentialsState>) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.role = action.payload.role;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateCredentials: (state, action) => {
      state.credentials = { ...state.credentials, ...action.payload };
      state.error = null;
    },
    setShouldRedirect: (state, action) => {
      state.shouldRedirect = action.payload;
    },
  },
});

export const { loginTrigger, loginSuccess, loginFailure, updateCredentials, setShouldRedirect } =
  loginSlice.actions;

export default loginSlice.reducer;
