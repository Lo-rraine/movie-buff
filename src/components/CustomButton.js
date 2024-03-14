import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const CustomButton = (props) => {
    return (
        <>
            <div
                className="movie-action"
                onClick={() => props.handleFavouritesClick(props.movie)}
            >
                <FavoriteRoundedIcon sx={{ color: "#3F3D56", fontSize: 26 }} />
                <p className="movie-card-text">Add to Favourites</p>
            </div>
        </>
    );
};

export default CustomButton;
