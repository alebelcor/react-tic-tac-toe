import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import markSpace from '../redux/actions/markSpace';
import reset from '../redux/actions/reset';
import getIsGameOver from '../redux/selectors/getIsGameOver';

const Space = ({ hasBorderRight, hasBorderTop, handleClick, handleReset, isGameOver, markedBy, position }) => {
  const btnClass = classNames({
    'position-btn': true,
    'border-top': hasBorderTop,
    'border-right': hasBorderRight,
    'marked-1': markedBy === 1,
    'marked-2': markedBy === 2,
  });

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
    <li className="position">
      <button
        className={btnClass}
        type="button"
        onClick={onMarkSpace}
      >
        <span className="sr-only">Position {position} of 9</span>
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
