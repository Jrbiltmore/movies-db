import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, name, desc, release, image }) => {
  return (
    <article className="movie">
      <div className="img">
        <img src={image} alt={name}></img>
      </div>
      <div className="movie-footer">
        <h3>{name}</h3>
        <p>{desc}</p>
        <h5>Release Data: {release}</h5>
        <Link to={`/movie/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Movie;
