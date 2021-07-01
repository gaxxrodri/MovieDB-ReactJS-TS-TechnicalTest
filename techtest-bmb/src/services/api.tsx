import axios from "axios";
import { Api, ApiResponse } from '../common/types';


const URL = process.env.REACT_APP_URL;
const API = process.env.REACT_APP_KEY;
const url_endpoint = `${URL}?api_key=${API}`;


export const api:Api = {
    movies: {
        async fetch(){
            try {
                const {data} = await axios.get<ApiResponse>(url_endpoint);
                return data.results
            } catch (error) {
                console.error(error);
            }
        }
    }
};

export default api;