import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface MovieDetails extends Movie {
  release_date: string;
  runtime: number;
  genres: { id: number; name: string }[];
  cast: { name: string; character: string; profile_path: string | null }[];
}

interface MoviesResponse {
  results: Movie[];
}

interface CreditsResponse {
  cast: { name: string; character: string; profile_path: string | null }[];
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<Movie[], void>({
      query: () => `movie/popular?api_key=${API_KEY}`,
      transformResponse: (response: MoviesResponse) => response.results,
    }),
    getMovieDetails: builder.query<MovieDetails, number>({
      query: (movieId) => `movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`,
      transformResponse: (response: any) => {
        const { credits, ...movie } = response;
        return {
          ...movie,
          cast: credits.cast,
        };
      },
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetMovieDetailsQuery } = moviesApi;





/* 
export const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};
 */