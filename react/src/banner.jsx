import React,{useState ,useEffect} from 'react';
import instance,{requests} from './Api';
import './css/banner.css'

const Banner = () =>{
  const [Movie,setMovie] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() =>{
     async function fetchData() {
    const request = await instance.get(requests.fetchNetflixOriginals);
    setMovie(request.data.results);

   }

   fetchData()
  },[])
   const handelnext = () =>{
    setcurrentIndex((prev) => (prev + 1) );
   };
  
   const currentMovie = Movie[currentIndex];

  
return(
    <div>
        <header
        style={{
            color: "white",
            height : '600px',
            width: '100%',
            backgroundColor:'black',
            backgroundSize: 'cover',
            backgroundPosition : 'center',
            backgroundImage:  currentMovie?.backdrop_path
      ? `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`
      : "none"
        }}
        onClick={handelnext}>
            <div style={{paddingTop: '300px',paddingLeft: '50px',color:'white'}}>
                <h1>{currentMovie?.title || currentMovie?.name}</h1>
                <p>{currentMovie?.overview}</p>
                <button className='play'>Play</button>
                <button className='play'>Next</button>
            </div>
        </header>
    </div>
)

}

export default Banner;

