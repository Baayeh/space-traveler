import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './App.css';
import Capsules from './pages/Capsules';
import Homepage from './pages/Homepage';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Rocket from './pages/Rocket';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'capsules',
        element: <Capsules />,
      },
      {
        path: 'rockets',
        element: <Rocket />,
      },
      {
        path: 'missions',
        element: <Missions />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
