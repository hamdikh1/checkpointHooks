import React from  'react'
import RateMovie from '../RateMovie/RateMovie'

const NavBar = ({setRateMovieSearch , RateMovieSearch , name , setName}) => {
  return (
      <div>
        < input type="text" placeholder ="search"  value={name} onChange={(e)=> {setName (e.target.value)}}/>
       <RateMovie setRate={setRateMovieSearch} rate={RateMovieSearch} />
    
      </div>
  )

}
export default NavBar 