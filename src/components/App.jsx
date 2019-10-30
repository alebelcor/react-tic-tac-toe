/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <Fragment>
      <Header />

      <Main/>

      <Footer />
    </Fragment>
  );
};

export default App;
