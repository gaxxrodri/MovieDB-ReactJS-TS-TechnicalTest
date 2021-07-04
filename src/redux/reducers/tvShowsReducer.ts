import { TvShow, TvShowActions } from '../../common/interfaces/TvShowsInterfaces';
import actionTypes from '../actions/actionTypes';

function tvShowsReducer(tvShows = [], action:TvShowActions) {
  let updateTvShows:TvShow[] | undefined = [...tvShows];

  switch (action.type) {
    case actionTypes.LOAD_TVSHOWS:
        updateTvShows = action.tvShows;
      break;
    case actionTypes.LOAD_TVSHOWS_ERROR:
      break;
    default:
      break;
  }
  return updateTvShows;
}

export default tvShowsReducer;
