import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice=createSlice({
    name:"movies", 
    initialState:{
        nowPlayingMovies:[],
        youtubekey:null,
    }, 
    reducers:{
        addNowPlayingMovies:(state, action) =>{
          state.nowPlayingMovies = action.payload;
        },
        setKeyForVideo :(state, action) =>{
          state.youtubekey = action.payload;
        }
    }
})
export const { addNowPlayingMovies, setKeyForVideo } = MoviesSlice.actions;
export default MoviesSlice.reducer;