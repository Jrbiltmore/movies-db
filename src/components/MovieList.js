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
    <section className="section">
      <h2 className="section-title">Marvel Movies</h2>
      <div className="movies-center">
        {movie.map((item) => {
          return <Movie key={item.id} {...item}></Movie>;
        })}
      </div>
    </section>
  );
};

export default MovieList;
