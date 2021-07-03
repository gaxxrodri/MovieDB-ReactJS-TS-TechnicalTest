import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import similarTitlesReducer from './similarTitlesReducer';
import tvShowsReducer from './tvShowsReducer';
import titleDetailsReducer from './titleDetailsReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  tvShows: tvShowsReducer,
  similarTitles: similarTitlesReducer,
  titleDetails: titleDetailsReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
