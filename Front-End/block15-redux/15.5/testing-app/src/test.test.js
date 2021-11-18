import React from 'react';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRedux from "./renderWithRedux";

describe('Primeiro Test', () => {
  beforeEach(cleanup);
  test('Test 1', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdd = queryByText(/clique aqui/i);

    expect(buttonAdd).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('Test 2', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: {clickReducer: {counter: 5}}});
    const buttonAdd = queryByText(/clique aqui/i);

    expect(buttonAdd).toBeInTheDocument();
    expect(queryByText('5')).toBeInTheDocument();
  });

  test('Test 3', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdd = queryByText(/clique aqui/i);

    expect(buttonAdd).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();

    userEvent.click(buttonAdd);
    expect(queryByText('1')).toBeInTheDocument();
  });

  test('Test 4', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: {clickReducer: {counter: 10}}});
    const buttonAdd = queryByText(/clique aqui/i);

    expect(buttonAdd).toBeInTheDocument();
    expect(queryByText('10')).toBeInTheDocument();

    userEvent.click(buttonAdd);
    expect(queryByText('11')).toBeInTheDocument();
  })
});

