export type LoginCredentialsState = {
  username: string;
  password: string;
};

export interface LoginCredentials {
  username: string;
  password: string;
}

export enum Roles {
  admin = 'admin',
  user = 'user',
}

export interface LoginState {
  credentials: LoginCredentials;
  role: Roles | null;
  loading: boolean;
  error: string | null;
  shouldRedirect: boolean;
}

export enum LoginFields {
  username = 'username',
  password = 'password',
}
