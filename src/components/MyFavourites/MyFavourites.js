import React from "react";
import "./Favourites.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const MyFavourites = ({ favourites, removeFavouriteMovie }) => {
  const handleRemoveClick = (movie) => {
    removeFavouriteMovie(movie);
  };

  return (
    <div className="bg">
      <div className="heading-container">
        <h1 className="heading">My Favourites</h1>
      </div>
      <div className="movie-container">
        {favourites.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
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
                onClick={() => handleRemoveClick(movie)}
              >
                <DeleteIcon sx={{ color: "#3F3D56", fontSize: 26 }} />
                <p className="movie-card-text">Remove</p>
              </div>
            </div>
          </div>
        ))}
        <div className="add-more-fave">
          <Link to="/">
            <AddCircleIcon sx={{ color: "white", fontSize: 200 }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyFavourites;
