import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import MovieItem from "./components/MovieItem";
//import Heading from "./components/Heading";
//import SearchInput from "./components/SearchInput";
//import AddFavourites from "./components/AddFavourites";
//import RemoveFavourites from "./components/RemoveFavourite";
//import API_KEY from "./API_KEY";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyFavourites from "./components/MyFavourites/MyFavourites";
import Genres from "./components/Genres/Genres";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="main">
          <Routes>
            <Route path="/search" exact element={<Search />} />
            <Route path="/genres" exact element={<Genres />} />
            <Route
              path="/myfavourites"
              element={<MyFavourites favourites={favourites} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
