import { Movie, MovieActions } from '../../common/MovieInterfaces';
import actionTypes from '../actions/actionTypes';

function selectedMovieReducer(selectedMovie = [], action:MovieActions) {
  let updateSelectedMovie:Movie | any = [selectedMovie]; // ----TODO
  
  
  switch (action.type) {
    case actionTypes.LOAD_SELECTED_MOVIE:
      updateSelectedMovie = action.selectedMovie;
      break;
    case actionTypes.LOAD_MOVIES_ERROR:
      break;
    default:
      break;
  }
  return updateSelectedMovie;
}

export default selectedMovieReducer;
