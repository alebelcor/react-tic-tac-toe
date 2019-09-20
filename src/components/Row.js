/** @jsx jsx */
import { jsx } from '@emotion/core';

import Space from './Space';

import {
  positionRowStyle
} from '../styles/Row.css';

const Row = ({ positions }) => {
  return (
    <ol css={positionRowStyle}>
      {positions.map(position => {
        return (
          <Space
            key={position}
            position={position}
          />
        );
      })}
    </ol>
  );
}

export default Row;
