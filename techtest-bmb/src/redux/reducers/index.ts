import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import selectedMovieReducer from './selectedMovieReducer';
import selectedTvShowReducer from './selectedTvShowReducer';
import tvShowsReducer from './tvShowsReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
  tvShows: tvShowsReducer,
  selectedTvShow: selectedTvShowReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
