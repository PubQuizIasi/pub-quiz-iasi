import { useLocation } from 'react-router-dom';
import { paths } from '../common';

export const useGetCurrentPage = () => {
  const { pathname } = useLocation();
  return {
    isLandingPage: pathname === paths.root,
    isTeamRegistration: pathname === paths.teamRegistration,
    isGameResults: pathname === paths.gameResults,
    isCorporateGames: pathname === paths.corporateGames,
    isFaq: pathname === paths.faq,
    isContact: pathname === paths.contact,
  };
};
