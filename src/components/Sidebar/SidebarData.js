import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

export const SidebarData = [
  {
    title: "Search",
    icon: <SearchRoundedIcon />,
    link: "/search",
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
