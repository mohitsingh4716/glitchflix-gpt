import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies= ()=>{
    const dispatch= useDispatch();

    const nowPlayMovies=useSelector((store)=>store.movies.nowPlayingMovies);

  const getNowPlayingMovies= async() =>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const jsonData= await data.json();
    // console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(()=>{

   !nowPlayMovies&& getNowPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;

