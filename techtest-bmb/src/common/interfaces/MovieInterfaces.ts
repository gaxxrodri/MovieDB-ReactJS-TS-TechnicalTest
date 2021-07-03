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
    media_type: string;
    release_date: Date;
    original_language: OriginalLanguage;
    original_title: string;
    overview: string;
    poster_path: string;
    popularity: number;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export enum OriginalLanguage {
    En = 'en',
    Ja = 'ja',
}



