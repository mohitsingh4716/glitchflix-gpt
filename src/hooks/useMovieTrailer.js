import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    console.log(movieId);

    // fetch trailer video
    const getMovieVideo = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/653346/videos?language=en-US`, API_OPTIONS);
      const jsonData = await data.json();
  
      const filterData = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : jsonData[0];
    //   console.log(trailer);
  
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      getMovieVideo();
    }, []);
}

export default useMovieTrailer