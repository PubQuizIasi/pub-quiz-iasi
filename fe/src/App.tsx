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
import { CssBaseline } from '@mui/material';
import ThemeProvider from './providers/ThemeProvider';
import Loader from './components/Loader';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loader loading={true} />}>
          <ThemeProvider>
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
