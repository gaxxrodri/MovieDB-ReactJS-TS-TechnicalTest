import React from 'react';
import TvShowsList from '../../../components/TvShowsList/TvShowsList';
import { render, screen } from '../../../utils/test.utils';

describe('Given a TvShowsList component', () => {

  test('Then it should contain', () => {
  render(<TvShowsList />);
    expect(screen.getByText('Trending TV Shows')).toBeInTheDocument();
  });
});