import axios from 'axios';
import { Api } from '../common/interfaces/ApiInterface';
import { ApiMovieResponse } from '../common/interfaces/MovieInterfaces';
import { ApiSimilarTitlesResponse } from '../common/interfaces/SimilarTitlesInterfaces';
import { ApiTvShowResponse } from '../common/interfaces/TvShowsInterfaces';
import { TitleDetails } from '../common/interfaces/TitleDetailsInterfaces';

const URL_MOVIES = process.env.REACT_APP_URL_MOVIES;
const URL_TVSHOWS = process.env.REACT_APP_URL_TVSHOWS;
const URL_SIMILAR_TITLES = process.env.REACT_APP_URL_SIMILAR_TITLES;
const URL_TITLES = process.env.REACT_APP_URL_TITLES;
const KEY = process.env.REACT_APP_KEY;


export const api:Api = {
  movies: {
    async fetch() {
      const url_movies_endpoint = `${URL_MOVIES}?api_key=${KEY}`;
      try {
        const  {data}  = await axios.get<ApiMovieResponse>(url_movies_endpoint); 
        const movies = data.results;
        return movies;
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  tvShows:{
    async fetch(){
      const url_tvShows_endpoint = `${URL_TVSHOWS}?api_key=${KEY}`;
      try {
        const { data } = await axios.get<ApiTvShowResponse>(url_tvShows_endpoint); 
        const tvShows = data.results;
        return tvShows;
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  details:{
    async fetch(titleId:number, mediaType:string){

      const url_titleDetail_endpoint = `${URL_TITLES}/${mediaType}/${titleId}?api_key=${KEY}&language=en-US`;

      try {
        const  {data}  = await axios.get<TitleDetails>(url_titleDetail_endpoint); 
        return data;
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  similarTitles: {
    async fetch(titleId:number, mediaType:string){
      const url_similarTitles_endpoint = `${URL_SIMILAR_TITLES}/${mediaType}/${titleId}/similar?api_key=${KEY}`;
      try {
        const { data } = await axios.get<ApiSimilarTitlesResponse>(url_similarTitles_endpoint);        
        const similarTitles = data.results;
        return similarTitles
      } catch (error) {
        throw new Error(error)
      }
    }
  }
};

export default api;
