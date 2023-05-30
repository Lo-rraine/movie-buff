import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const MovieItem = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="">
          <Card sx={{ width: 320, margin: 4 }}>
            <CardMedia
              sx={{ height: 400 }}
              image={movie.Poster}
              title={movie.Title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <strong>{movie.Title}</strong>
              </Typography>

              <Typography color="text.secondary">{movie.Year}</Typography>
            </CardContent>
            <CardActions>
              <IconButton
                onClick={() => props.handleFavouritesClick(movie)}
                aria-label="add to favorites"
              >
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
};

export default MovieItem;
