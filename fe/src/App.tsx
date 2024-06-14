/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from './common';
import './i18n';
import SnackbarProvider from './providers/SnackbarProvider';
import { Provider } from 'react-redux';
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react';
// @ts-ignore
import { store, persistor } from './store/store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import Loader from './components/Loader';
import { theme } from './common';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loader loading={true} />}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
              <RouterProvider router={routes}></RouterProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
