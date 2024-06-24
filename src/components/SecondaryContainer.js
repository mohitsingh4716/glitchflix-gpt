import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    movies.nowPlayingMovies && 
   ( <div className="bg-black">
       <div className="mt-0 md:-mt-36 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPopularMovies} /> 
        <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowUpcomingMovies} />
     </div>

      {/* 
      MovieList - Popular
        - MovieCard * n

      MovieList - Now Playing
      MovieList - Trending
      MovieList - Horror
      */}

    </div>)
  )
};

export default SecondaryContainer;