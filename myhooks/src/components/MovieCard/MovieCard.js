import React from  'react'
import RateMovie from '../RateMovie/RateMovie'
import"./MovieCard.css"
const MovieCard= ({film , key}) => {
 
  return (
      <div>
      <div hey={key}>
      <h1>{film.Name}</h1>
      <img src={film.URL} style={{height: "300px" , width : "300px"}}/>
      <br/>
      <span>  <RateMovie  rate ={film.rate}/> </span>
      
      </div>
      </div>
  ) 

}
export default MovieCard 
