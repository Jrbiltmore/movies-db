import React from "react";
import Movie from "./Movie";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const MovieList = () => {
  const { movie, loading } = useGlobalContext();

  if (loading) {
    return <Loading></Loading>;
  }
  if (movie.length < 1) {
    return <h2 className="title">No Movies matched your search</h2>;
  }

  return (
    <div>
      <h2>Movie list component</h2>
    </div>
  );
};

export default MovieList;
