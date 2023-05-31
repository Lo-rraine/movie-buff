import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import AddFavourites from "../AddFavourites";
import RemoveFavourite from "../RemoveFavourite";

const MyFavourites = ({ favourites, removeFavouriteMovie }) => {
  const handleRemoveClick = (movie) => {
    removeFavouriteMovie(movie);
  };

  return (
    <div>
      <h1>My Favourite Movies</h1>
      {favourites.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <button onClick={() => handleRemoveClick(movie)}>
            Remove from Favourites
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyFavourites;
