import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieDetailsQuery } from '../api/movieApi';
import './MovieDetails.css';

const MovieDetails: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data: movie, error, isLoading } = useGetMovieDetailsQuery(Number(movieId));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div className="movie-details-container">
      <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
      <div className="movie-info">
        <h1>{movie?.title}</h1>
        <p>{movie?.overview}</p>
        <h2>Cast</h2>
        <ul>
          {movie?.cast.map((member) => (
            <li key={member.name}>
              {member.name} as {member.character}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
