import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import SearchInput from "../SearchInput";
import MovieItem from "./MovieItem";
import AddFavourites from "../AddFavourites";
import API_KEY from "../../API_KEY";
import "./SearchStyles.css";

function Search({
  searchInputValue,
  setSearchInputValue,
  movies,
  setMovies,
  favourites,
  setFavourites,
  getMovieDetails,
  addFavouriteMovie,
}) {
  return (
    <div className="search-main">
      <div className="">
        <SearchInput
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
      </div>

      <div className="movie-listing">
        <MovieItem
          movies={movies}
          favouriteComponent={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
    </div>
  );
}

export default Search;
