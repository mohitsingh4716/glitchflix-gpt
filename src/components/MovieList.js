import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies);
  return (
    <div className='px-6' >
        <h1 className='text-white py-4 text-lg md:text-3xl'>{title}</h1>
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide space-x-4 relative">
            <div className="flex">
               {movies?.map((movie)=>(
                <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>
               ))}
                
            </div>
        </div>
    </div>
  )
}

export default MovieList;