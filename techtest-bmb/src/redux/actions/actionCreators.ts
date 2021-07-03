import { Dispatch } from 'redux';
import api from '../../services/api';
import actionTypes from './actionTypes';

export const loadMovies = () => async (dispatch: Dispatch) => {
  try {
    const movies = await api.movies.fetch();
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

export const loadTvShows = () => async (dispatch: Dispatch) => {
  try {
    const tvShows = await api.tvShows.fetch();
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

export const loadDetailsById = (titleId: number, mediaType: string) => async (dispatch: Dispatch) => {

    try {
      const  titleDetails  = await api.details.fetch(titleId, mediaType);
      dispatch({
        type: actionTypes.LOAD_DETAILS,
        titleDetails ,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_DETAILS_ERROR,
      });
    }
  };

export const loadSimilarTitles = (titleId:number, mediaType:string) => async (dispatch: Dispatch) => {
  
  try {
    const similarTitles = await api.similarTitles.fetch(titleId,mediaType);
    dispatch({
      type: actionTypes.LOAD_SIMILAR_TITLES,
      similarTitles,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_SIMILAR_TITLES_ERROR,
    });
  }
};