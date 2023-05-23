import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieItem from './components/MovieItem';
import Heading from './components/Heading';
import SearchInput from './components/SearchInput';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourite';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieDetails = async (searchInputValue) => {
    const url = `http://www.omdbapi.com/?s=${searchInputValue}&apikey=263d22d8`;

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

    <div className='row d-flex align-items-center mt-4 mb-4'>
      <Heading heading='Your Movies' />
      <SearchInput
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
    </div>

    <div className='container-fluid movie-listing'>
      <MovieItem
        movies={movies}
        favouriteComponent={AddFavourites}
        handleFavouritesClick={addFavouriteMovie}
      />
    </div>

    <div className='row d-flex align-items-center mt-4 mb-4'>
      <Heading heading='Favourites' />
    </div>
    <div className='container-fluid movie-listing'>
      <MovieItem
        movies={favourites}
        favouriteComponent={RemoveFavourites}
        handleFavouritesClick={removeFavouriteMovie}
      />
    </div>
  </div>
);
};


export default App;