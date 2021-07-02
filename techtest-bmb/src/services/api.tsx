import axios from 'axios';
import { Api } from '../common/ApiInterface';
import { Movie } from '../common/MovieInterfaces';
import { TvShow } from '../common/TvShowsInterfaces';

const URL_MOVIES = process.env.REACT_APP_URL_MOVIES;
const URL_TVSHOWS = process.env.REACT_APP_URL_TVSHOWS;
const API = process.env.REACT_APP_KEY;

export const api:Api = {
  movies: {
    async fetch() {
      const url_movies_endpoint = `${URL_MOVIES}?api_key=${API}`;
      try {
        const { data } = await axios.get<Movie[] | any>(url_movies_endpoint); // TODO
        const movies = data.results;
        return movies;
      } catch (error) {
        console.error(error);
      }
    }
  },
  tvShows:{
    async fetch(){
      const url_tvShows_endpoint = `${URL_TVSHOWS}?api_key=${API}`;
      try {
        const { data } = await axios.get<TvShow[] | any>(url_tvShows_endpoint); // TODO
        
        const tvShows = data.results;
        return tvShows;
      } catch (error) {
        console.error(error);
      }
    }
  }
};

export default api;
