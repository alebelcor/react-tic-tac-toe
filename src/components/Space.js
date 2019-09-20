/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { connect } from 'react-redux';

import markSpace from '../redux/actions/markSpace';
import reset from '../redux/actions/reset';
import getIsGameOver from '../redux/selectors/getIsGameOver';

import {
  positionStyle,
  positionButtonStyle,
  markedByOneStyle,
  markedByTwoStyle,
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
          ${markedBy === 1 ? markedByOneStyle : ``};
          ${markedBy === 2 ? markedByTwoStyle : ``};
          ${isGameOver ? `cursor: initial;` : ``};
        `}
        type="button"
        onClick={onMarkSpace}
      >
        <span css={screenReaderOnlyStyle}>Position {position} of 9</span>
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
