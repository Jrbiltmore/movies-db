import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url =
  "https://api.themoviedb.org/3/list/1?api_key=af25738eca771b7b43d18ad260807848&language=en-US";
const imgUrl = "https://image.tmdb.org/t/p/w185";

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getMovie() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        // For image End
        if (data.items) {
          const {
            title: name,
            overview: desc,
            popularity: pop,
            release_date: release,
            original_language: lang,
            poster_path,
            image = `${imgUrl}${poster_path}`,
          } = data.items[2];
          const newMovie = {
            name,
            desc,
            pop,
            release,
            lang,
            image,
          };
          setMovie(newMovie);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getMovie();
  }, [id]);

  if (loading) {
    <Loading></Loading>;
  }
  if (!movie) {
    return <h2 className="section-title">No Movie to display</h2>;
  }

  const { name, desc, pop, release, lang, image } = movie;

  return (
    <section className="section movie-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">Name: </span> {name}
          </p>
          <p>
            <span className="drink-data">Description: </span> {desc}
          </p>
          <p>
            <span className="drink-data">Popularity: </span> {pop}
          </p>
          <p>
            <span className="drink-data">Language: </span> {lang}
          </p>
          <p>
            <span className="drink-data">Release Date: </span> {release}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
