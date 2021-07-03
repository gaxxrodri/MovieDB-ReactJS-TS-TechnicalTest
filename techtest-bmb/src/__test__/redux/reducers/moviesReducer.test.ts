import actionTypes from '../../../redux/actions/actionTypes';
import moviesReducer from '../../../redux/reducers/moviesReducer';


describe('Given a moviesReducer function', () => {
    describe('When its call with LOAD_MOVIES', ()=> {
        test('Then should return movies data', () => {
          expect(
            moviesReducer([], {
              type: actionTypes.LOAD_MOVIES,
              movies: [],
            }),
          ).toEqual([]);
        });
    });
    describe('When its call with LOAD_MOVIES_ERROR', ()=> {
        test('Then should return default movies data', () => {
          expect(
            moviesReducer([], {
              type: actionTypes.LOAD_MOVIES_ERROR,
              movies: [],
            }),
          ).toEqual([]);
        });
    });
    describe('When its call without actionType', ()=> {
      test('Then should return default movies data', () => {
        expect(
          moviesReducer([], {
            type: '',
            movies: [],
          }),
        ).toEqual([]);
      });
  });
});
