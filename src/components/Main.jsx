/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useSelector } from 'react-redux';

import getWinningCombination from '../redux/selectors/getWinningCombination';

import Row from './Row';

import {
  mainStyle,
  getWinnerStyleStroke,
} from '../styles/Main.css';

const Main = () => {
  const winningCombination = useSelector(getWinningCombination);

  return (
    <main css={css`
      ${mainStyle};
      ${winningCombination !== null ? getWinnerStyleStroke(winningCombination.join('')) : ``};
    `}>
      <Row positions={[1, 2, 3]} />
      <Row positions={[4, 5, 6]} />
      <Row positions={[7, 8, 9]} />
    </main>
  );
};

export default Main;
