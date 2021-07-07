import React from 'react';
import {MovieDetails}  from '../../../components/MovieDetails/MovieDetails';
import { render, screen } from '../../../utils/test.utils';

describe('Given a MovieDetails component', () => {

  test('Then it should contain', () => {
  render(<MovieDetails />);
    expect(screen.getByText('Ranking')).toBeInTheDocument();
  });
});