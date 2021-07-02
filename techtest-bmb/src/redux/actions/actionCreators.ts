import { Dispatch } from 'redux';
import { Movie } from '../../common/MovieInterfaces';
import api from '../../services/api';
import actionTypes from './actionTypes';

export const loadMovies = () => async (dispatch: Dispatch) => {
  const movies = await api.movies.fetch();
  try {
    dispatch({
      type: actionTypes.LOAD_MOVIES,
      movies,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_MOVIES_ERROR,
    });
  }
};

export const getMovieById = (SelectedMovieId:number, movies:Movie[]) => (dispatch:Dispatch) => {
  
  const selectedMovie = movies.find((movie:Movie)=> movie.id === SelectedMovieId)
  try {
    dispatch({
      type: actionTypes.LOAD_SELECTED_MOVIE,
      selectedMovie,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_MOVIES_ERROR,
    });
  }
};

export const loadTvShows = () => async (dispatch: Dispatch) => {
  const tvShows = await api.tvShows.fetch();

  try {
    dispatch({
      type: actionTypes.LOAD_TVSHOWS,
      tvShows,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_TVSHOWS_ERROR,
    });
  }
};

