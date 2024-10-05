import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false,
        movieName: null,
        movieResults: null,

    },
    reducers:{
        toggleGptSearchView : (state)=>{
            state.showGptSearch= !state.showGptSearch;
        },
        addGptMovieResult:(state, action)=>{
            const{ movieName, movieResults}= action.payload;
            state.movieName= movieName;
            state.movieResults= movieResults;
        },
        clearGptMovieResult:(state)=>{
            state.movieName= null;
            state.movieResults= null;
        }
    },
});

export const{toggleGptSearchView, addGptMovieResult, clearGptMovieResult}= gptSlice.actions;

export default gptSlice.reducer;