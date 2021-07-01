import { Dispatch } from "redux";
import api from "../../services/api";
import actionTypes from "./actionTypes";

export const loadMovies = () => async (dispatch: Dispatch) => {
    const movies  = await api.movies.fetch();
    try {
        dispatch({
            type: actionTypes.LOAD_MOVIES,
            movies,
          });
    } catch (error) {
        dispatch({
            type: actionTypes.LOAD_MOVIES_ERROR
        });      
    };
};
