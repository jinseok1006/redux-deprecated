import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@fontsource/noto-sans-kr';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './modules';
import logger from 'redux-logger';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostListPage />,
  },
  {
    path: '/:postId',
    element: <PostPage />,
  },
]);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk, logger))
);

// You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);
