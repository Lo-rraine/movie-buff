import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import SearchInput from "../SearchInput";
import MovieItem from "../MovieItem";
import AddFavourites from "../AddFavourites";
import API_KEY from "../../API_KEY";
import "./SearchStyles.css";

function Search() {
  const [searchInputValue, setSearchInputValue] = useState("hello");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  //search functionality with variable input
  const getMovieDetails = async (searchInputValue) => {
    const url = `http://www.omdbapi.com/?s=${searchInputValue}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  const persistenceStorage = (items) => {
    localStorage.setItem("movie-buff-faves", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    persistenceStorage(newFavouriteList);
  };

  useEffect(() => {
    getMovieDetails(searchInputValue);
  }, [searchInputValue]);
  useEffect(() => {
    const storedMovieFaves = JSON.parse(
      localStorage.getItem("movie-buff-faves")
    );
    setFavourites(storedMovieFaves || []);
  }, []);

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
