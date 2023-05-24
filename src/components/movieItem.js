import React from 'react';

const MovieItem = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container justify-content-start m-3'>

                    <img src={movie.Poster} alt='movie' className='movie-image rounded'></img>

                    <ul class="list-group list-group-flush text-center">
                        <li className='list-group-item'><strong>{movie.Title}</strong></li>
                        <li className='list-group-item'>Release Year - {movie.Year}</li>
                        <li className='list-group-item'>imdID - {movie.imdbID}</li>
                        <li className='list-group-item'>This is a {movie.Type}</li>
                        <li className='list-group-item'>
                            <div onClick={() => props.handleFavouritesClick(movie)}
                                className=''>
                                <FavouriteComponent />
                            </div>
                        </li>
                    </ul>


                </div>

            ))}
        </>
    );
};

export default MovieItem;