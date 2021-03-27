import React from  'react'

const RateMovie = ({rate , setRate}) => {
    const array  =(x)=> {
        let  star  =[]
        for (let i =1 ; i<= 5 ; i++)
        {
            if( i <= x)
            {
                star.push (
                    <span style={{fontSize:"150%", color:'red', cursor : 'pointer'}} onClick={()=>setRate(i)}>
                        ★
                    </span>
                )
            }
            else {
                star.push (
                    <span style={{fontSize:"150%" , color:'red', cursor : 'pointer'}} onClick={()=>setRate(i)}>
                        ☆
                    </span>
                )
            }

        }
        return star
    }
  return (
      <div>
          {
           array (rate)
           }
          
      </div>
  )

}
RateMovie.defaultProps={
    setRate : ()=>{} ,
    rate :0
}
export default RateMovie ;
