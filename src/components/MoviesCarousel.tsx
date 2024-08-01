import React from 'react';
import { useGetPopularMoviesQuery } from '../api/movieApi';
import { motion } from 'framer-motion';
import './MoviesCarousel.css';

const MoviesCarousel: React.FC = () => {
  const { data: movies, error, isLoading } = useGetPopularMoviesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div className="carousel-container">
      <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div className="inner-carousel" drag="x" dragConstraints={{ right: 0, left: -300 * (movies?.length || 0) }}>
          {movies?.map((movie) => (
            <motion.div className="carousel-item" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MoviesCarousel;
