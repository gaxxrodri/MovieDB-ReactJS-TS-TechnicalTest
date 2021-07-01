import { compose } from "redux";

export type Api = {
    movies:{
        fetch(): Promise<any>   //TODO THIS
    }
};

export type MovieActions = {
    type: 'LOAD_MOVIES';
    movies:Movie;
}


export type ApiResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export type Movie = {
    original_language: OriginalLanguage;
    original_title: string;
    poster_path: string;
    video: boolean;
    vote_average: number;
    overview: string;
    id: number;
    vote_count: number;
    adult: boolean;
    backdrop_path: string;
    title: string;
    genre_ids: number[];
    release_date: Date;
    popularity: number;
    media_type: MediaType;
};

export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
};

export enum MediaType {
    Movie = "movie",
};

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }