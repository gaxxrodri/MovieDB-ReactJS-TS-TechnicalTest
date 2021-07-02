/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { Api, ApiMovieResponse, Movie } from '../common/interfaces';

const URL = process.env.REACT_APP_URL;
const API = process.env.REACT_APP_KEY;
const url_endpoint = `${URL}?api_key=${API}`;

export const api:Api = {
  movies: {
    async fetch() {
      try {
        const { data } = await axios.get<Movie[] | any>(url_endpoint); // TODO
        const movies = data.results;
        return movies;
      } catch (error) {
        console.error(error);
      }
    }
  }
};

export default api;
