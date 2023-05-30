import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

export const SidebarData = [
  {
    title: "Search",
    icon: <SearchRoundedIcon />,
    link: "/search",
  },
  {
    title: "Genres",
    icon: <MovieRoundedIcon />,
    link: "/genres",
  },
  {
    title: "My Favourites",
    icon: <FavoriteRoundedIcon />,
    link: "/myFavourites",
  },
  {
    title: "Dev",
    icon: <CodeRoundedIcon />,
    link: "/dev",
  },
];
