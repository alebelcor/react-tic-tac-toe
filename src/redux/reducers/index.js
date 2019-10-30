import markSpace from './markSpace';
import reset from './reset';

export default (state, action) => {
  switch (action.type) {
    case 'MARK_SPACE':
      return markSpace(state, action.payload.position);
    case 'RESET':
      return reset();
    default:
      return state;
  }
};
