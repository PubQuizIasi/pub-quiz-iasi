const baseUri =
  process.env.IS_LOCAL_DEVELOPMENT === 'true'
    ? 'http://localhost:8000'
    : 'https://pub-quiz-iasi-backend-alpha.vercel.app';

const endpoints = {
  gameResults: baseUri + '/game-results',
  login: baseUri + '/login',
  register: baseUri + '/register',
  seasons: baseUri + '/seasons',
  teams: baseUri + '/teams',
  joinTeam: baseUri + '/teams' + '/join-requests',
  leaveTeam: baseUri + '/teams' + '/leave-team',
  kick: baseUri + '/teams' + '/kick',
  contactInfo: baseUri + '/contact',
  teamRegistration: baseUri + '/team-registration',
  updateLandmark: baseUri + '/team-registration' + '/landmark',
  resetReservations: baseUri + '/team-registration' + '/reset',
  seasonLeaderboard: baseUri + '/season-leaderboard',
};

export default endpoints;
