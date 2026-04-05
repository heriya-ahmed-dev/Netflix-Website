import React,{useState , useEffect} from 'react';
import Api from '../Api.js';
import instance from '../Api.js';

const Row = ({Title,fetchUrl}) => {
   
    const [Movie,setMovie] = useState ([]);
    const baseURL = `https://image.tmdb.org/t/p/original`;
    
    useEffect (()=>{
        async function fetchData() {
            try{
        const request = await instance.get(fetchUrl)
        console.log('Movie Data',request.data.results)
        setMovie(request.data.results);
         }
         catch{
            console.log('Error in the Fetching of the Movie' , error)
         }
    }
     fetchData();
    },[fetchUrl])
  

  return (
    <div>
       <h1 style={{color: 'red', fontSize: '30px'}}>{Title}</h1>
       <div style={{
             display:'flex',
             overflowX:'auto',
             width: '100%',
             gap: '10px',
            scrollbarWidth: 'none',    
    

         }}>
         {Movie?.map((movie)=>(
         <img  
            key={movie.id}
            src={`${baseURL}${movie.backdrop_path || movie.poster_path}`} 
            style={{
              width:'220px',
              height: '140px',
          }}/>
       ))}
   </div>
    </div>
  )
}

export default Row;