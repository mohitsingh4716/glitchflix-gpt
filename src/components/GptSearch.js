import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      
      <div className="">
        <img
          className=" absolute -z-10"
          src={BG_URL}
          alt="bg"
        ></img>
      </div>

      <GptSearchBar/>
      <GptMovieSuggestion/>



      {/* GptSearch
      GptMovieSuggestion */}

      </div>
  )
}

export default GptSearch