import api from "../../services/api";
import actionTypes from "./actionTypes";

export const loadMovies = () => async (dispatch:any) => {
    const data  = await api.movies.fetch();
    try {
        dispatch({
            type: actionTypes.LOAD_MOVIES,
            movies: data,
          });
    } catch (error) {
        console.error(error);      
    };
};
