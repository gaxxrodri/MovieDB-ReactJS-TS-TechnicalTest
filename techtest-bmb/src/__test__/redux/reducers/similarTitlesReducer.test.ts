import actionTypes from '../../../redux/actions/actionTypes';
import similarTitlesReducer from '../../../redux/reducers/similarTitlesReducer';


describe('Given a similarTitlesReducer function', () => {
    describe('When its call with LOAD_SIMILAR_TITLES', ()=> {
        test('Then should return titles data', () => {
          expect(
            similarTitlesReducer([], {
              type: actionTypes.LOAD_SIMILAR_TITLES,
              similarTitles: [],
            }),
          ).toEqual([]);
        });
    });
    describe('When its call with LOAD_SIMILAR_TITLES_ERROR', ()=> {
        test('Then should return default titles data', () => {
          expect(
            similarTitlesReducer([], {
              type: actionTypes.LOAD_SIMILAR_TITLES_ERROR,
              similarTitles: [],
            }),
          ).toEqual([]);
        });
    });
    describe('When its call without actionType', ()=> {
      test('Then should return default titles data', () => {
        expect(
          similarTitlesReducer([], {
            type: '',
            similarTitles: [],
          }),
        ).toEqual([]);
      });
  });
});
