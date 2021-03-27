import React from  'react'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieCard/MovieCard.css'
import RateMovie from '../RateMovie/RateMovie'

const MovieList = ({movie , name , RateMovieSearch}) => {

  return (
    <div>
          <h2> <strong>My Movies</strong> </h2>
      <div  style={{display: "flex" , justifyContent: "space-around" , flexWrap: "wrap"}}> 
        
{movie.map(film =>( <MovieCard film={film} key={film.id}/>))
}

        </div>
        <h3> <strong> My new favorites</strong></h3> 
      </div>
  )

}
export default MovieList 

