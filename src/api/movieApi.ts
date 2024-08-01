import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface MoviesResponse {
  results: Movie[];
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<Movie[], void>({
      query: () => `movie/popular?api_key=${API_KEY}`,
      transformResponse: (response: MoviesResponse) => response.results,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = moviesApi;



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