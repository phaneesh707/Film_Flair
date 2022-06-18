import React from "react";
import { useState,useEffect } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";


const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=fb48203c";

const App = ()=>{
    
    const [movies,setMovies] = useState([])
    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()   
        setMovies(data.Search);
        console.log(data.Search);

    }

    useEffect(()=>{
        searchMovie('Avengers');
    },[]);

    
    const [srcItem,setItem] = useState("");
    const handleChange = (e) =>{
        setItem(e.target.value)
    }

    const handleClick = () =>{
        setItem("")
        searchMovie(srcItem);
    }

    return(
        <div className="app">
            <h1>FILM FLAIR</h1>


            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={srcItem}
                    onChange={handleChange}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={handleClick}
                />
           </div>


           {
                movies?.length > 0 ?
                (
                <div className="container">
                {
                    // <MovieCard mov={movies[0]} />
                    movies.map((movie)=>(
                        <MovieCard mov={movie} />
                    ))
                }
                </div>
            ):(
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )

           }

            

        </div>
    )
}

export default App;