import React from "react";
import SearchInput from "../SearchInput";
import MovieItem from "./MovieItem";
import AddFavourites from "../AddFavourites";
import "./SearchStyles.css";

function Search({
  searchInputValue,
  setSearchInputValue,
  movies,
  addFavouriteMovie,
}) {
  return (
    <div className="search-main">
      <div className="search-div">
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
