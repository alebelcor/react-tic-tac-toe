import { css } from '@emotion/core';

export const positionStyle = css`
  position: relative;
  display: inline-block;
  width: 33.3333%;
  height: 120px;
  vertical-align: middle;
`;

export const positionButtonStyle = css`
  width: 100%;
  height: 100%;
  border: 0;
  border-style: solid;
  border-color: #211a1e;
  background-color: transparent;
`;

const markedStyle = css`
  position: relative;
  cursor: not-allowed;
`;

export const markedByOneStyle = css`
  ${markedStyle};

  &::before,
  &::after {
    position: absolute;
    top: 10%;
    right: 50%;
    display: block;
    width: 5px;
    height: 100px;
    background-color: #5bc0eb;
    content: '';
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const markedByTwoStyle = css`
  ${markedStyle};

  &::before {
    top: 0;
    right: 0;
    display: block;
    width: 100px;
    height: 100px;
    border: 5px solid #c3423f;
    border-radius: 100%;
    content: '';
  }
`;
