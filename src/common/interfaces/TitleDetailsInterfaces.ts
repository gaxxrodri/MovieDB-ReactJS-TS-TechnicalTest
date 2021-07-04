export type TitleDetailsActions = {
    type: string;
    titleDetails:TitleDetails;
}

export interface ApiFullDetailsResponse {
    page: number;
    results: TitleDetails;
    total_pages: number;
    total_results: number;
}


export interface TitleDetails {
    backdrop_path: string | null;
    created_by: any[];
    episode_run_time: number[];
    first_air_date: Date;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: Date;
    last_episode_to_air: LastEpisodeToAir;
    name?: string;
    next_episode_to_air: NextEpisodeToAir;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Network[];
    production_countries: any[];
    runtime?:number;
    release_date:Date;
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title?: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface LastEpisodeToAir {
    air_date: Date;
    episode_number: number;
    id: number;
    name:string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path:string;
    vote_average: number;
    vote_count: number;
}

export interface NextEpisodeToAir {
    air_date: Date;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: null;
    vote_average: number;
    vote_count: number;
}

export interface Network {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export interface Season {
    air_date: Date | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    season_number: number;
    poster_path?: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

