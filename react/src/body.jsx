import React,{useState,useEffect} from 'react';
import axios from './Api.js';
import './css/Body.css'

function Body({Title,fetchUrl}){
  const [movie,setmovies] = useState(null);

  useEffect(()=>{
    async function fetchdata() {
      try{
      
      const request = await axios.get(request.fetchUrl)
        
        const randommovie = request.data.results[ 
          math.floor(math.random() * request.data.results.length)
        ];

      
        setmovies(randommovie)
      }
      catch(error){
        console.log(error);
      }
    }
 
    fetchdata();
  },[fetchUrl])
   return(
     <div className="row">
      <h2>{Title}</h2>

      {movie && (
        <img
          className="row_poster"
         src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie.title || movie.name}
        />
      )}
    </div>
   )


 
}

export default Body;