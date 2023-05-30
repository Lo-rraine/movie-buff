import React from "react";
import Heading from "../Search/Heading";

function MyFavourites({ favourites }) {
  return (
    <div>
      <Heading
        heading="Movie Buff"
        text="Find and Keep track of all your favourite movies"
      />

      {favourites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <p>Faves coming soon</p>
      )}
    </div>
  );
}

export default MyFavourites;
