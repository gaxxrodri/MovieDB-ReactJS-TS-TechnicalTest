import { Movie, MovieActions } from '../../common/interfaces';
import actionTypes from '../actions/actionTypes';

function moviesReducer(movies = [], action:MovieActions) {
  let updateMovies:Movie[] | any = [...movies]; // ----TODO

  switch (action.type) {
    case actionTypes.LOAD_MOVIES:
      updateMovies = action.movies;
      break;
    case actionTypes.LOAD_MOVIES_ERROR:
      break;
    default:
      break;
  }
  return updateMovies;
}

export default moviesReducer;
