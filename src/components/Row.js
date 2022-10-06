import axios from '../localaxios'
import React, { useEffect, useState } from 'react'
import './css/Row.css'

function Row({title,isLargeRow,fetchURL}) {

  const [movie,setMovie]=useState([])
  const base_url ="https://image.tmdb.org/t/p/original/"

  useEffect(()=>{
   async function fetchData(){
    const request = await axios.get(fetchURL);

    setMovie(request.data.results);

    return request
   }

   fetchData();

  },[fetchURL])

  return (

    <div className='row' >
      <h2>{title}</h2>
     

      <div className='row_posters'>
        {
          movie.map(movie=>{
            return <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} className={`rowposter ${isLargeRow && "largeImage"}`} key={movie.id} alt=" " />
     
          })
        }
        
      </div>
      </div>
    
  )
}

export default Row
