import { useLocation } from 'react-router-dom';
import { paths } from '../common';

const useIsLandingPage = () => {
  const { pathname } = useLocation();
  return pathname === paths.root;
};

export default useIsLandingPage;
