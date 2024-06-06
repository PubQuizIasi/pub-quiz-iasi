import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import paths from './paths';
import Layout from '../components/Layout';
import Contact from '../pages/Contact';
import About from '../pages/About';
import GameResults from '../pages/GameResults';
import FAQ from '../pages/FAQ';
import NewGameResults from '../pages/GameResults/NewGameResults';
import Login from '../pages/Login';
import CorporateGames from '../pages/CorporateGames';

const routes = createBrowserRouter([
  {
    path: paths.root,
    element: <Layout />,
    children: [
      { path: paths.root, element: <About /> },
      { path: paths.login, element: <Login /> },
      { path: paths.gameResults, element: <GameResults /> },
      { path: paths.newGame, element: <NewGameResults /> },
      { path: paths.corporateGames, element: <CorporateGames /> },
      { path: paths.faq, element: <FAQ /> },
      { path: paths.contact, element: <Contact /> },
    ],
  },
]);

export default routes;
