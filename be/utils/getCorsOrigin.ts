import { isLocalDevelopment } from './isLocalDevelopment';

export const getCorsOrigin = () =>
  isLocalDevelopment ? 'http://localhost:3000' : 'https://pub-quiz-iasi.vercel.app';
