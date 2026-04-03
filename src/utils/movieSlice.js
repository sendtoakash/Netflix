import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  movielist: [],
  nowplaying: [],
  popular: [],
  toprated: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovieList: (state, actions) => {
      state.movielist = actions.payload;
    },

    addNowPlayingMovieList: (state, actions) => {
      state.nowplaying = actions.payload;
    },

    addPopularMovieList: (state, actions) => {
      state.popular = actions.payload;
    },

    addTopRated: (state, actions) => {
      state.toprated = actions.payload;
    },
  },
});

export const { addMovieList, addNowPlayingMovieList, addPopularMovieList, addTopRated } =
  movieSlice.actions;
export default movieSlice.reducer;
