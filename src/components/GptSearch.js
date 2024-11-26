import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import  BG_URL  from '../assets/glitchbg.jpg'

const GptSearch = () => {
  return (

    <>
     <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover "
          src={BG_URL}
          alt="bg"
        ></img>
      </div>
      <div className=''>
      
      <GptSearchBar/>
      <GptMovieSuggestion/>

      {/* GptSearch
      GptMovieSuggestion */}

      </div>
    </>
    
  )
}

export default GptSearch