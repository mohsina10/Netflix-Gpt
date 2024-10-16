import React, { FC } from 'react'
import MovieCard from './MovieCard'; 
import { MovieListProps } from "../../utils/TypeScrptProps";

const MovieList: FC<MovieListProps> = ({ title, movie }) => {
 
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          {movie.map((movie) => (
            <MovieCard key={movie.id} path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;