import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4 relative group '>

      <div className="transform transition duration-300 ease-in-out group-hover:scale-125 group-hover:z-10 group-hover:translate-y-2 group-hover:-translate-x-2">
         <img className='w-full h-full object-cover rounded-lg' alt="Movie Card " src={IMG_CDN_URL + posterPath}/>
      </div>
     
       
    </div>
  )
}

export default MovieCard