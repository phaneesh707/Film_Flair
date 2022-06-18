import React from "react";

const MovieCard = ({mov}) =>{
    return(
    <div className="movie">
        <div>
            <p>{mov.Year}</p>
        </div>
        <div>
            <img src={mov.Poster !== 'N/A'?mov.Poster:'https://via.placeholder.com/400'} alt={mov.Title} />
        </div>
        <div>
            <span>{mov.Type}</span>
            <h3>{mov.Title}</h3>
        </div>
    </div>
)
}

export default MovieCard;