import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Rocket from './pages/Rocket';
import Missions from './pages/Missions';
import Profile from './pages/Profile';

describe('UI Test', () => {
  test('Test Profile UI', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Test Mission UI', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Test Rocket UI', () => {
    const tree = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
