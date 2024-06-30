export const facebookUrl = 'https://www.facebook.com/Quiz.Iasi';
export const facebookGroupUrl = 'https://www.facebook.com/groups/774088096006835';

const paths = {
  root: '/',
  login: '/admin',
  gameResults: '/game-results',
  corporateGames: '/corporate-games',
  newGame: '/new-game',
  faq: '/faq',
  contact: '/contact',
};

export const protectedPaths: string[] = [paths.newGame];

export default paths;
