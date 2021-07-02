import { Movie, MovieActions } from '../../common/MovieInterfaces';
import actionTypes from '../actions/actionTypes';

function moviesReducer(movies = [], action:MovieActions) {
  let updateMovies:Movie[] | undefined = [...movies];

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
