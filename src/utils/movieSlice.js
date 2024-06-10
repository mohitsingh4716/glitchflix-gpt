import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        nowPopularMovies:null,
        nowTopRatedMovies:null,
        nowUpcomingMovies: null,
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
        addTopRatedMovies: (state, action)=>{
            state.nowTopRatedMovies=action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.nowUpcomingMovies= action.payload;
        },

    },
});

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies, addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;