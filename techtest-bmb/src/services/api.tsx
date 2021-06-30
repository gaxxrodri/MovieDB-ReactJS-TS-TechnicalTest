import axios from "axios";
import { Api } from "../common/types";


const URL = process.env.REACT_APP_URL;
console.log(URL)


export const api:Api = {
    movies: {
        async fetch(){
            try {
                const response = await axios.get<any>('url');
                return response.data;
                
            } catch (error) {
                console.error(error);
            }
        }
    }
};

export default api;