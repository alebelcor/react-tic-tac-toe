import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import configureStore from './redux/configureStore';
import App from './components/App';

const store = configureStore({
  turns: [],
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
