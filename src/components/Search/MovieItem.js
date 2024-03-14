import React from "react";
import CustomButton from "../CustomButton";

const MovieItem = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <div className="movie-card-inner">
            <h3 className="movie-card-heading">Movie Reccomendation</h3>
            <img
              className="movie-card-image"
              src={movie.Poster}
              alt={movie.Title}
            />a
            <h3 className="movie-card-heading">{movie.Title}</h3>
            <h3 className="movie-card-heading">{movie.Year}</h3>
            <CustomButton movie={movie} 
             handleFavouritesClick={() => console.log('click handled')}
             />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieItem;
