import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieItem from './components/MovieItem';
import Heading from './components/Heading';
import SearchInput from './components/SearchInput';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourite';
import API_KEY from './API_KEY';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('hello');
  const [favourites, setFavourites] = useState([]);

  const getMovieDetails = async (searchInputValue) => {
    const url = `http://www.omdbapi.com/?s=${searchInputValue}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => { getMovieDetails(searchInputValue); }, [searchInputValue]);
  useEffect(() => {
    const storedMovieFaves = JSON.parse(localStorage.getItem('movie-buff-faves'));
    setFavourites(storedMovieFaves);
  }, [])


  const persistenceStorage = (items) => {
    localStorage.setItem('movie-buff-faves', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    persistenceStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID);

    setFavourites(newFavouriteList);
    persistenceStorage(newFavouriteList);
  };


  return (
    <div className='container-fluid'>

      <div className='d-flex align-items-center flex-column text-center'>
        <Heading
          heading='Movie Buff'
          text='Find and Keep track of all your favourite movies'
        />

        <SearchInput
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
      </div>

      <div className='row mt-5'>
        <div className='col-8 border border-dark'>
          <div className='ps-1'>
            <Heading
              heading='movies...'
              text='new and old movies at your fingertips!'
            />
          </div>

          <div className='container-fluid movie-listing'>
            <MovieItem
              movies={movies}
              favouriteComponent={AddFavourites}
              handleFavouritesClick={addFavouriteMovie}
            />
          </div>
        </div>

        <div className='col-4 text-center'>
          <Heading
            heading='your favourites..'
            text='keep track of all your favourite movies right here!'
          />
          <div className='container-fluid movie-listing'>
            <MovieItem
              movies={favourites}
              favouriteComponent={RemoveFavourites}
              handleFavouritesClick={removeFavouriteMovie}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;