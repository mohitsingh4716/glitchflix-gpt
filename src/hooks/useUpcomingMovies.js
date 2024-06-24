import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";



const useUpcomingMovies= ()=>{
    const dispatch= useDispatch();
    const nowUpcoming= useSelector((store)=>store.movies.nowUpcomingMovies);

  const getUpcomingMovies= async() =>{
    const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
    const jsonData= await data.json();
    // console.log(jsonData.results);
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(()=>{
    !nowUpcoming && getUpcomingMovies();
  },[]);
};

export default useUpcomingMovies;