import React from 'react'
import Nav from './Nav'
import './css/HomeScreen.css'
import Banner from '../Banner'
import Row from './Row'
import userrequests from '../Request'


function Homescreen() {
  return (
    <div className='homescreen'>
      <Nav/>
      <Banner/>


      <Row title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={userrequests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={userrequests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={userrequests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={userrequests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchURL={userrequests.fetchRomanceMovies}/>
      <Row title="Documentaries Movies" fetchURL={userrequests.fetchDocumentariesMovies}/>
    </div>
  )
}

export default Homescreen;
