import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieItem from './components/MovieItem';
import Heading from './components/Heading';
import SearchInput from './components/SearchInput';
import AddFavourites from './components/AddFavourites';

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

  const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

  useEffect(() => { getMovieDetails(searchInputValue); }, [searchInputValue]);

  return (
    <div className='container-fluid movie-listing'>

      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading='Your Movies' />
        <SearchInput 
        searchInputValue={searchInputValue} 
        setSearchInputValue={setSearchInputValue} 
        />
      </div>

      <div className='row'>
        <MovieItem 
          movies={movies} 
          favouriteComponent={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
    </div>
  );
};

export default App;