/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { connect } from 'react-redux';

import markSpace from '../redux/actions/markSpace';
import reset from '../redux/actions/reset';
import getIsGameOver from '../redux/selectors/getIsGameOver';

import {
  positionStyle,
  positionButtonStyle,
  markedStyle,
} from '../styles/Space.css';

import {
  screenReaderOnlyStyle
} from '../styles/utils.css';

const Space = ({ handleClick, handleReset, isGameOver, markedBy, position }) => {
  const onMarkSpace = () => {
    if (isGameOver) {
      return handleReset();
    }

    if (markedBy) {
      return undefined;
    }

    return handleClick();
  }

  return (
    <li css={positionStyle}>
      <button
        css={css`
          ${positionButtonStyle};
          ${!(position === 1 || position === 2 || position === 3) ? `border-top-width: 3px;` : ``};
          ${!(position === 3 || position === 6 || position === 9) ? `border-right-width: 3px;` : ``};
          ${isGameOver ? `cursor: initial;` : ``};
        `}
        type="button"
        aria-describedby={`position-${position}`}
        onClick={onMarkSpace}
      >
        {markedBy > 0 && (
          <svg aria-hidden="true" fill={markedBy === 1 ? `#5bc0eb` : `#c3423f`} css={markedStyle} xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
            {markedBy === 1 && <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>}
            {markedBy === 2 && <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>}
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
}

const mapStateToProps = (state, ownProps) => {
  let markedBy;

  state.turns.some(turn => {
    if (turn.position === ownProps.position) {
      markedBy = turn.player;
      return true;
    }

    return false;
  });

  return {
    isGameOver: getIsGameOver(state),
    markedBy
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick: () => dispatch(markSpace(ownProps.position)),
  handleReset: () => dispatch(reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Space);
