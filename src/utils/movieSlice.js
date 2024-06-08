import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        nowPopularMovies:null,
        nowPlayTrailer: null,
    },

    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.nowPopularMovies= action.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.nowPlayTrailer=action.payload;
        },

    },
});

export const {addNowPlayingMovies,addPopularMovies, addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;