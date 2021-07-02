export type MovieActions = {
    type: string;
    movies?:Movie[];
    selectedMovie?:Movie;
}

export interface ApiMovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: OriginalLanguage;
    original_title: string;
    poster_path: string;
    popularity: number;
    overview: string;
    title: string;
    release_date: Date;
    video: boolean;
    vote_average: number;
    vote_count: number;
    media_type: MediaType;
}

export enum OriginalLanguage {
    En = 'en',
    Ja = 'ja',
}

export enum MediaType {
    Movie = 'movie',
}


