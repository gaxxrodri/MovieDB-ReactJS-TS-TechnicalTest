import { SimilarTitlesActions, SimilarTitle } from '../../common/interfaces/SimilarTitlesInterfaces';
import actionTypes from '../actions/actionTypes';

function similarTitlesReducer(similarTitles = [], action:SimilarTitlesActions) {
  let updateSimilarTitles:SimilarTitle[] | undefined = [...similarTitles];

  switch (action.type) {
    case actionTypes.LOAD_SIMILAR_TITLES:
        updateSimilarTitles = action.similarTitles;
      break;
    case actionTypes.LOAD_SIMILAR_TITLES_ERROR:
      break;
    default:
      break;
  }
  return updateSimilarTitles;
}

export default similarTitlesReducer;
