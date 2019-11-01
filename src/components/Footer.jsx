/** @jsx jsx */
import { jsx } from '@emotion/core';

import {
  footerStyle,
} from '../styles/Footer.css';

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <iframe
        data-testid="star-on-github"
        src="https://ghbtns.com/github-btn.html?user=alebelcor&repo=react-tic-tac-toe&type=star&count=false"
        title="Star this repository on GitHub"
        frameBorder="0"
        scrolling="0"
        width="55"
        height="20"
      />
    </footer>
  );
};

export default Footer;
