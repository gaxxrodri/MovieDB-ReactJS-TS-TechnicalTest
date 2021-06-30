import axios from "axios";
import { Api } from "../common/types";


export const api:Api = {
    movies: {
        async fetch(){
            try {
                const response = await axios.get<any>('url')
                return response.data
                
            } catch (error) {
                console.error(error)
            }
        }
    }
}

export default api;