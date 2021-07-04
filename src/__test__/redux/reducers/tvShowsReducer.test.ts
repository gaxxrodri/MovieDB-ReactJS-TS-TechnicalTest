import actionTypes from '../../../redux/actions/actionTypes';
import tvShowsReducer from '../../../redux/reducers/tvShowsReducer';

describe('Given a tvShowsReducer function', () => {
  describe('When its call with LOAD_TVSHOWS', () => {
    test('Then should return titles data', () => {
      expect(
        tvShowsReducer([], {
          type: actionTypes.LOAD_TVSHOWS,
          tvShows: [],
        }),
      ).toEqual([]);
    });
  });
  describe('When its call with LOAD_TVSHOWS_ERROR', () => {
    test('Then should return default titles data', () => {
      expect(
        tvShowsReducer([], {
          type: actionTypes.LOAD_TVSHOWS_ERROR,
          tvShows: [],
        }),
      ).toEqual([]);
    });
  });
  describe('When its call without actionType', () => {
    test('Then should return default titles data', () => {
      expect(
        tvShowsReducer([], {
          type: '',
          tvShows: [],
        }),
      ).toEqual([]);
    });
  });
});
