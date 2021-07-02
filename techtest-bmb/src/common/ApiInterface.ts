import { ApiMovieResponse } from "./MovieInterfaces";
import { TvShow } from './TvShowsInterfaces';

export type Api = {
    movies:{
        fetch(): Promise<ApiMovieResponse>
    },
    tvShows:{
        fetch():Promise<TvShow[]>
    }
};