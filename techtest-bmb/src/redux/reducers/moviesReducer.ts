import { Movie, MovieActions } from '../../common/types';
import actionTypes from '../actions/actionTypes';

function moviesReducer(movies=[], action:MovieActions) {
    let updateMovies:Movie[] =[...movies];

  switch (action.type) {
    case actionTypes.LOAD_MOVIES:
      updateMovies = [action.movies]
      break;
    default:
        break;
    }    
    return updateMovies;
};

export default moviesReducer;

