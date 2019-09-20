import { css } from '@emotion/core'

export const headerStyle = css`
  margin-bottom: 40px;
  text-align: center;
`;

export const headingTextStyle = css`
  color: #5bc0eb;
`;

export const mainStyle = css`
  position: relative;
  margin: 0 auto 40px;
  width: 360px;
`;

export const footerStyle = css`
  position: relative;
  margin: 0 auto;
  width: 360px;
  text-align: center;
`;

const winnerStyle = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  &::before {
    position: absolute;
    background-color: #211a1e;
    content: '';
    z-index: 1;
    animation-name: fadeIn;
    animation-duration: 400ms;
    border-radius: 40%;
  }
`;

export const getWinnerStyleStroke = winningCombination => {
  let strokeStyle = ``;

  switch (winningCombination) {
    case '123':
      strokeStyle = css`
        ${winnerStyle};
        &::before {
          top: 15%;
          left: 0;
          width: 100%;
          height: 10px;
        }
      `;
      break;
    case '147':
      strokeStyle = css`
        ${winnerStyle};
        &::before {
          top: 0;
          left: 14%;
          width: 10px;
          height: 100%;
        }
      `;
      break;
    case '159':
      strokeStyle = css`
        ${winnerStyle};
        &::before {
          top: -19%;
          right: 49%;
          width: 10px;
          height: 500px;
          transform: rotate(-45deg);
        }
      `;
      break;
    case '258':
      strokeStyle = css`
        ${winnerStyle};
        &::before {
          top: 0;
          left: 48%;
          width: 10px;
          height: 100%;
        }
      `;
      break;
    case '357':
      strokeStyle = css`
        ${winnerStyle};
        &::before {
          top: -19%;
          left: 48%;
          width: 10px;
          height: 138%;
          transform: rotate(45deg);
        }
      `;
      break;
    case '369':
      strokeStyle = css`
        ${winnerStyle};
        &::before {
          top: 0;
          right: 15.3%;
          width: 10px;
          height: 100%;
        }
      `;
      break;
    case '456':
      strokeStyle = css`
        ${winnerStyle};
        &::before {
          top: 50%;
          left: 0;
          width: 100%;
          height: 10px;
        }
      `;
      break;
    case '789':
      strokeStyle = css`
        ${winnerStyle};
        &::before {
          top: 82%;
          left: 0;
          width: 100%;
          height: 10px;
        }
      `;
      break;
    default:
      break;
  }

  return css`
    ${winnerStyle};
    ${strokeStyle};
  `;
};
