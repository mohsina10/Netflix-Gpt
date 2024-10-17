import {configureStore} from "@reduxjs/toolkit"; 
import userReducer from './UserSlice';
import moviesReducer from './MoviesSlice'
import GptSlice from "./GptSlice";
const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: GptSlice,
  },
});

export default AppStore;