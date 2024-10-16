import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/TypeScrptProps';
import MovieList from './MovieList';

const SecondaryContainer = () => {
   const movies = useSelector(
     (store: RootState) => store?.movies?.nowPlayingMovies
   );
  return (
    <div>
      <MovieList title={"Now Playing Movies"} movie={movies}/>
    </div>
  )
}

export default SecondaryContainer