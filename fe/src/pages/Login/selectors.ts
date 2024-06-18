import { RootState } from '../../store/types';
import { Roles } from '../../types/login';

const selectCredentials = (state: RootState) => state.login.credentials;

const selectLoading = (state: RootState) => state.login.loading;

const selectIsAdmin = (state: RootState) => state.login.role === Roles.admin;

const selectRole = (state: RootState) => state.login.role;

const selectError = (state: RootState) => state.login.error;

const selectShouldRedirect = (state: RootState) => state.login.shouldRedirect;

export {
  selectCredentials,
  selectLoading,
  selectIsAdmin,
  selectRole,
  selectError,
  selectShouldRedirect,
};
