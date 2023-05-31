import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
//import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieItem = (props) => {
  const FavouriteComponent = props.favouriteComponent;
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
            />
            <h3 className="movie-card-heading">{movie.Title}</h3>
            <h3 className="movie-card-heading">{movie.Year}</h3>
            <div
              className="movie-action"
              onClick={() => props.handleFavouritesClick(movie)}
            >
              <FavoriteRoundedIcon sx={{ color: "#3F3D56", fontSize: 26 }} />
              <p className="movie-card-text">Add to Favourites</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieItem;
