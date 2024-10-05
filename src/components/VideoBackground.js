
import { useSelector } from "react-redux";
import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";


const VideoBackground = ({movieTitle}) => {
  // const trailerVideo = useSelector((store) => store.movies?.nowPlayingMovies);
  const [videoURL, setVideoURL] = useState("")

  useEffect(()=> {
    movieTrailer(movieTitle).then((res) => { 
      const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
      const match = res.match(regex);
      // console.log(match);
      
      if (match && match[1]) {
        const videoId = match[1];
        setVideoURL(videoId); 
      }
  }); 
  }, [])

// console.log(videoURL)
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${videoURL}?autoplay=1&mute=1&loop=1&playlist=${videoURL}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
       
      ></iframe>
    </div>
  );
};

export default VideoBackground;
