/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

import { loadMovies } from '../../../redux/actions/actionCreators';
import actionTypes from '../../../redux/actions/actionTypes';
import api from '../../../services/api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>; 

describe('Given a loadMovies function', () => {
  describe('When invoked without argument', () => {
    test('Then should return a list of movies', async () => {
      const dispatch = jest.fn();
      const movies = jest.fn();

      mockedAxios.get.mockResolvedValueOnce([{}, {}, {}]);
      //  await loadMovies()(dispatch);
      //  await  api.movies.mockResolvedValue()     // TODO

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_MOVIES,
        movies: [{}, {}, {}],
      });
    });
  });
});
