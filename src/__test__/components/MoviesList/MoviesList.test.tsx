import React from 'react';
import MoviesList from '../../../components/MoviesList/MoviesList';
import { render, screen } from '../../../utils/test.utils';

describe('Given a MoviesList component', () => {

  test('Then it should contain', () => {
  render(<MoviesList />);
    expect(screen.getByText('Trending movies')).toBeInTheDocument();
  });

  test('Then at least one list-item should be rendered', () => {
    const  {container}  = render(<MoviesList />);
    const chooseTag = container.querySelector('.list-item__img');
    expect(chooseTag).toBeDefined();
   });
});






// describe('When its call with LOAD_MOVIES', () => {
//     test('Then should return movies data', () => {
//       expect(
//         moviesReducer([], {
//           type: actionTypes.LOAD_MOVIES,
//           movies: [],
//         }),
//       ).toEqual([]);
//     });
//   });