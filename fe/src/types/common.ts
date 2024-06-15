import { Dispatch, ReactNode, SetStateAction } from 'react';

export enum Languages {
  en = 'en',
  ro = 'ro',
}

export type Logos = {
  [key: string]: string;
};

export enum SnackbarType {
  success = 'success',
  error = 'error',
}

export const NUMBER_OF_ROUNDS = 6;

export const MIN_SCORE = 0;

export const MAX_SCORE_JOKER = 32;

export const GAME_RESULTS_FILTERS_OVERALL_RANKING = 'OVERALL_RANKING';

export const NUMBER_OF_GAMES_PER_SEASON = 12;

export enum ErrorCodes {
  CREDENTIALS_REQUIRED = 'CREDENTIALS_REQUIRED',
  GAME_ALREADY_EXISTS = 'GAME_ALREADY_EXISTS',
}

export type ProviderProps = {
  children?: string | JSX.Element | JSX.Element[] | unknown;
};

export type SnackbarState = {
  message: string | null;
  type: SnackbarType | null;
};

export type AdminContextType = {
  isAdmin: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
};

export type LoaderProps = ProviderProps & {
  loading: boolean;
  loadingMessage?: string;
};

export type ActionModalProps = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  action: (...args: unknown[]) => void;
  title: string;
  content: string;
  actionName: string;
  children?: string | JSX.Element | JSX.Element[];
};

export interface ButtonProps {
  children: string | ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (...args: unknown[]) => unknown;
}
