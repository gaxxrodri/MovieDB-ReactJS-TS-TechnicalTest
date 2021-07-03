export interface ApiTvShowResponse {
    page: number;
    results: TvShow[];
    total_pages: number;
    total_results: number;
}

export interface TvShow {
    first_air_date:  Date;
    name: string;
    overview: string;
    original_name: string;
    origin_country: string[];
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    poster_path: string;
    vote_average: number;
    id: number;
    popularity: number;
    media_type: string;
}



export type TvShowActions = {
    type: string;
    tvShows?:TvShow[];
    selectedTvShow?:TvShow;
}