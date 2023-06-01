import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import API_KEY from "./API_KEY";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyFavourites from "./components/MyFavourites/MyFavourites";
import Dev from "./components/Dev/Dev";
import Search from "./components/Search/Search";

const App = () => {
  const [searchInputValue, setSearchInputValue] = useState("hello");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  //search functionality with variable input
  const getMovieDetails = async (searchInputValue) => {
    const url = `https://www.omdbapi.com/?s=${searchInputValue}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    persistenceStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    persistenceStorage(newFavouriteList);
  };

  const persistenceStorage = (items) => {
    localStorage.setItem("movie-buff-faves", JSON.stringify(items));
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
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="main">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Search
                  searchInputValue={searchInputValue}
                  setSearchInputValue={setSearchInputValue}
                  movies={movies}
                  setMovies={setMovies}
                  favourites={favourites}
                  setFavourites={setFavourites}
                  getMovieDetails={getMovieDetails}
                  addFavouriteMovie={addFavouriteMovie}
                />
              }
            />

            <Route
              path="/myfavourites"
              element={
                <MyFavourites
                  favourites={favourites}
                  removeFavouriteMovie={removeFavouriteMovie}
                />
              }
            />
            <Route path="/dev" exact element={<Dev />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
