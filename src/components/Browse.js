
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  // Fetch data from TMDb API and update store
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>


    {/* 
        
        MainContainer
          -VideoConatiner
          -VideoTitle
        SecondaryConatiner
          -MovieList * n
          -cards * n  
     */}
    </div>
  )
}

export default Browse