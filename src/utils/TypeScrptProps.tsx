
interface Movie {
  id: number;
  original_title: string;
  releaseDate: string;
  overview:string;
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
interface NowPlayingVideo {
  movieId: number;
}
export type { RootState, Videotitle, VideoBackgroundMovie };