import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from '../../redux/configureStore';

import Space from '../Space';

describe('Space', () => {
  it('should render screen reader only text', () => {
    const position = 1;
    const store = configureStore({
      turns: [],
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Space position={position} />
      </Provider>
    );

    const spaceEl = getByTestId(`space-${position}`);

    expect(spaceEl).toBeVisible();
    expect(spaceEl).toHaveTextContent(`Position ${position} of 9`);
  });

  it('should render a specific mark, when player 1 clicks it, and screen reader only text', () => {
    const position = 1;
    const player = 1;
    const store = configureStore({
      turns: [],
    });

    const { getByTestId, asFragment } = render(
      <Provider store={store}>
        <Space position={position} />
      </Provider>
    );

    fireEvent.click(getByTestId(`space-${position}`));

    expect(getByTestId(`space-${position}`)).toHaveTextContent(`Position ${position} of 9, Selected by Player ${player}`);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a specific mark, when player 2 clicks it, and screen reader only text', () => {
    const position = 2;
    const player = 2;
    const store = configureStore({
      turns: [{ player: 1, position: 1, },],
    });

    const { getByTestId, asFragment } = render(
      <Provider store={store}>
        <Space position={position} />
      </Provider>
    );

    fireEvent.click(getByTestId(`space-${position}`));

    expect(getByTestId(`space-${position}`)).toHaveTextContent(`Position ${position} of 9, Selected by Player ${player}`);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should do nothing, when clicked, if already selected', () => {
    const player = 1;
    const position = 1;
    const store = configureStore({
      turns: [{ player, position, },],
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Space position={position} />
      </Provider>
    );

    fireEvent.click(getByTestId(`space-${position}`));

    const spaceEl = getByTestId(`space-${position}`);
    expect(spaceEl).toBeVisible();
    expect(spaceEl).toHaveTextContent(`Position ${position} of 9, Selected by Player ${player}`);
  });

  it('should reset when game is over', () => {
    const position = 1;
    const store = configureStore({
      turns: [{}, {}, {}, {}, {}, {}, {}, {}, {},],
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Space position={position} />
      </Provider>
    );

    fireEvent.click(getByTestId(`space-${position}`));

    const spaceEl = getByTestId(`space-${position}`);
    expect(spaceEl).toBeVisible();
    expect(spaceEl).toHaveTextContent(`Position ${position} of 9`);
  });
});
