import { isLocalDevelopment } from './isLocalDevelopment';

export const getCorsOrigin = () =>
  isLocalDevelopment ? 'http://localhost:3000' : 'https://www.pubquiziasi.ro';
