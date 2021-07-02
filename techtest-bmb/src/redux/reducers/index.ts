import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import selectedMovieReducer from './selectedMovieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
