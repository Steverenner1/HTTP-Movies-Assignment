import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieForm from "./Movies/MovieForm";
import AddMovie from "./Movies/AddMovie";
import MovieUpdate from "./Movies/MovieUpdate";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieToUpdate, setMovieToUpdate] = useState();

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
    <SavedList list={savedList} />
    <Route exact path="/" component={MovieList} />
    <Route exact path="/add-movie" component={AddMovie} />
    <Route path="/movies/:id" render={props => {
      return <Movie {...props} addToSavedList={addToSavedList} />
    }}
    />
    <Route path="/update-movie/:id" component={MovieUpdate} />
    </>
  )
};
export default App;
