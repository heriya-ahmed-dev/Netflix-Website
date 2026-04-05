import React from 'react';
import Row from './row.jsx'
import Api, { requests } from '../Api.js'

function RowList (){
    return(
        <div>
           <Row Title = "Action Movie" fetchUrl={requests.fetchActionMovies}/>
           <Row Title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
           <Row Title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
           <Row Title = "Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
           <Row Title = "Original Movies" fetchUrl={requests.fetchNetflixOriginals}/>
           <Row Title = "Trendings" fetchUrl={requests.fetchTrending}/>
        </div>
    )
}

export default RowList;