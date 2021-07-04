export type SimilarTitlesActions = {
    type: string;
    similarTitles: SimilarTitle[];
}

export interface ApiSimilarTitlesResponse {
        page: number;
        results: SimilarTitle[];
        total_pages: number;
        total_results: number;
}


export interface SimilarTitle {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    release_date: Date;
    original_language: OriginalLanguage;
    overview: string;
    popularity: number;
    poster_path: string;
    original_title: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export enum OriginalLanguage {
    En = "en",
}


