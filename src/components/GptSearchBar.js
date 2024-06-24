import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
// import openai from "../utils/openai";
// import { API_KEY_GEMINI } from "../utils/constants";
import gemnAI from "../utils/openai";

import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    return jsonData.results;
  };
  // searchMovieTMDB("Dil se");

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // make API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movie for the query: " +
      searchText.current.value +
      "only give me name of 5 movies , comma separated like the example result given ahead. Example Result are Dhoom, Don, Sholay, Golmaal, Koi mil gya";

    const model = gemnAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const getResult = async () => {
      const prompt = gptQuery;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    };

    // if(!getResult.text){
    //   // TODO: write Error Handling
    // }

    const finalCall = async () => {
      const text = await getResult();
      const gptMovies = text.split(",");
      // console.log(gptMovies);

      // for each movie i will search TMDB API

      const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));
      // [promise, promise, promise, promise, promise]

      const tmdbresult = await Promise.all(promiseArray);
      // console.log(tmdbresult);

      dispatch(
        addGptMovieResult({ movieName: gptMovies, movieResults: tmdbresult })
      );
    };
    finalCall();
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
