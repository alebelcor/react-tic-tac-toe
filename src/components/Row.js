import React from 'react';

import Space from './Space';

const Row = ({ positions }) => {
  return (
    <ol className="position-row">
      {positions.map(position => {
        return (
          <Space
            key={position}
            position={position}
            hasBorderTop={position !== 1 && position !== 2 && position !== 3}
            hasBorderRight={position !== 3 && position !== 6 && position !== 9}
          />
        );
      })}
    </ol>
  );
}

export default Row;
