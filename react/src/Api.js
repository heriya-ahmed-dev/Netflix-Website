import axios from 'axios';

const API_KEY  = '15724ade10b6a4594299bc6a41e33888'

const BASE_URL = 'https://api.themoviedb.org/3';


const instance = axios.create(
    { baseURL : BASE_URL }
)

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default instance;