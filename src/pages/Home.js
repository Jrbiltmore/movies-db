import React from "react";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm></SearchForm>
      <MovieList></MovieList>
    </main>
  );
};

export default Home;
