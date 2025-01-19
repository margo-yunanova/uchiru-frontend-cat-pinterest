import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import { getAllCatsLoader } from '@utils/loaders.ts';

import App from './App.tsx';
import ErrorPage from './pages/error-page/ErrorPage.tsx';
import { AllCats } from './routes/all-cats/AllCats.tsx';

async function enableMocking() {
  // if (process.env.NODE_ENV !== "development") {
  //   return;
  // }

  const { worker } = await import('./mocks/browser');

  return worker.start({ onUnhandledRequest: 'bypass', quiet: false });
}

await enableMocking();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <AllCats />, loader: getAllCatsLoader }],
  },
]);

const rootElement = ReactDOM.createRoot(document.getElementById('app')!);

rootElement.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
