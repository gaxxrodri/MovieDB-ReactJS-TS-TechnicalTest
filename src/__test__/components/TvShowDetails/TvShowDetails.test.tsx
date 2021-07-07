import React from 'react';
import {TvShowDetail}  from '../../../components/TvShowDetails/TvShowDetail';
import { render, screen } from '../../../utils/test.utils';

describe('Given a MovieDetails component', () => {
  describe('When is render', () => {
    test('Then it should contain', () => {
    render(<TvShowDetail />);
      expect(screen.getByText('Ranking')).toBeInTheDocument();
   });
  });
});