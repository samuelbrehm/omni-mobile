import React from 'react';
import { Provider } from 'react-redux';

import '~/config/StatusBarConfig';

import App from './App';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
