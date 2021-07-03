import { Movie } from "./MovieInterfaces";
import { SimilarTitle } from "./SimilarTitlesInterfaces";
import { TitleDetails } from "./TitleDetailsInterfaces"
import { TvShow } from './TvShowsInterfaces';

export type Api = {
    movies:{
        fetch(): Promise<Movie[] | Error>
    },
    tvShows:{
        fetch():Promise<TvShow[] | Error>
    },
    details:{
        fetch(titleId:number, mediaType:string):Promise<TitleDetails | Error>
    },
    similarTitles: {
        fetch(titleId:any, mediaType:string):Promise<SimilarTitle[] | Error>
    }
};