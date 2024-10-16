
interface Movie {
  id: number;
  original_title: string;
  releaseDate: string;
  overview: string;
  poster_path: string;
  // Add more properties as needed
}

interface MoviesState {
  nowPlayingMovies: Movie[];
  youtubekey:number;
}

interface RootState {
  movies: MoviesState;

}
interface Videotitle {
  title: string;
  overview:string;
}
interface VideoBackgroundMovie {
  movieId: number;
}
interface MovieListProps {
  title: string;
  movie: Movie[];
}
interface MovieCardProps {
  path:string;
}
export type {
  RootState,
  Videotitle,
  VideoBackgroundMovie,
  MovieListProps,
  MovieCardProps,
};