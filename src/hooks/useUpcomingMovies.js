import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";



const useUpcomingMovies= ()=>{
    const dispatch= useDispatch();

  const getUpcomingMovies= async() =>{
    const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const jsonData= await data.json();
    // console.log(jsonData.results);
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(()=>{
    getUpcomingMovies();
  },[]);
};

export default useUpcomingMovies;