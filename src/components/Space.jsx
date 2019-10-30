/** @jsx jsx */
import { useMemo } from 'react';
import { jsx, css } from '@emotion/core';
import { useSelector, useDispatch } from 'react-redux';

import markSpace from '../redux/actions/markSpace';
import reset from '../redux/actions/reset';

import getIsGameOver from '../redux/selectors/getIsGameOver';
import getMarkedBy from '../redux/selectors/getMarkedBy';

import {
  positionStyle,
  positionButtonStyle,
  markedStyle,
} from '../styles/Space.css';

import {
  screenReaderOnlyStyle,
} from '../styles/utils.css';

const Space = ({ position }) => {
  const isGameOver = useSelector(getIsGameOver);

  const selectMarkedBy = useMemo(getMarkedBy, []);
  const markedBy = useSelector(
    state => selectMarkedBy(state, position)
  );

  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (isGameOver) {
      handleReset();
      return;
    }

    if (markedBy > 0) {
      return;
    }

    dispatch(markSpace(position));
  };

  return (
    <li css={positionStyle}>
      <button
        css={css`
          ${positionButtonStyle};
          ${markedBy > 0 ? markedStyle : ``};
          ${!(position === 1 || position === 2 || position === 3) ? `border-top-width: 3px;` : ``};
          ${!(position === 3 || position === 6 || position === 9) ? `border-right-width: 3px;` : ``};
          ${isGameOver ? `cursor: initial;` : ``};
        `}
        type="button"
        aria-describedby={`position-${position}`}
        onClick={handleClick}
      >
        {markedBy > 0 && (
          <svg aria-hidden="true" fill={markedBy === 1 ? `#5bc0eb` : `#c3423f`} xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
            {markedBy === 1 && <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />}
            {markedBy === 2 && <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />}
          </svg>
        )}

        <span id={`position-${position}`} css={screenReaderOnlyStyle}>
          Position {position} of 9

          {markedBy > 0 && (
            <span>, Selected by Player {markedBy}</span>
          )}
        </span>
      </button>
    </li>
  );
};

export default Space;
