const API_KEY ="6194094c97fb5bd844f4e880a55e01f2"

const userrequests ={
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&langauges=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&langauges=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovies : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default userrequests;