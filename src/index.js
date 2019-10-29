/** @jsx jsx */
import { jsx, Global } from '@emotion/core'
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';

import App from './components/App';

import indexStyle from './styles/index.css';

const store = configureStore({
  turns: [],
});

render(
  <Provider store={store}>
    <Global styles={indexStyle} />
    <App />
  </Provider>,

  document.getElementById('root')
);
