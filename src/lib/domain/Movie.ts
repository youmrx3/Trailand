
export interface MoviePreview {
    poster_path?: string | null;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
}

export interface MovieDetails {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection?: Collection | null;
    budget?: number;
    genres?: Genre[];
    id?: number;
    imdb_id?: string | null;
    homepage?: string | null;
    original_language?: string;
    original_title?: string;
    overview?: string | null;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    release_date?: string;
    revenue?: number;
    runtime?: number | null;
    spoken_languages?: SpokenLanguage[];
    status?: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled";
    tagline?: string | null;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;

}

export interface UpcomingMovie {
    poster_path?: string | null;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
  }
  


interface Collection {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

interface Genre {
    id: number;
    name: string;
}

interface ProductionCompany {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    iso_639_1: string;
    name: string;
}


export function jsonToMoviePreview(json:unknown) : MoviePreview{
    return json as MoviePreview;
}

export function jsonToMovieDetails(json:unknown) : MovieDetails{
    return json as MovieDetails;
}

export function jsonToUpcomingMovie(json:unknown) : UpcomingMovie{
    return json as UpcomingMovie;
}


export interface MoviesTrendState {
    movies: MoviePreview[];
    loading: boolean;
}