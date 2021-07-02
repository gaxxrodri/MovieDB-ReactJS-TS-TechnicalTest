import { TvShow, TvShowActions } from '../../common/TvShowsInterfaces';
import actionTypes from '../actions/actionTypes';

function selectedTvShowReducer(selectedTvShow = [], action:TvShowActions) {
  let updateSelectedTvShow:TvShow | any = [selectedTvShow]; // ----TODO
  
  
  switch (action.type) {
    case actionTypes.LOAD_SELECTED_TVSHOW:
      updateSelectedTvShow = action.selectedTvShow;
      break;
    case actionTypes.LOAD_MOVIES_ERROR:
      break;
    default:
      break;
  }
  return updateSelectedTvShow;
}

export default selectedTvShowReducer;
