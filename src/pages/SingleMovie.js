import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/w185";
const imdb = "https://www.imdb.com/title/";

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=af25738eca771b7b43d18ad260807848&language=en-US`
        );
        const data = await response.json();

        // For image End
        if (data) {
          const {
            title: name,
            overview: desc,
            tagline: tag,
            popularity: pop,
            release_date: release,
            original_language: lang,
            poster_path,
            imdb_id,
            //image = `${imgUrl}${poster_path}`,
            image = imgUrl.concat(`${poster_path}`),
            imdb_url = imdb.concat(`${imdb_id}`),
          } = data;
          const newMovie = {
            name,
            desc,
            tag,
            pop,
            release,
            lang,
            image,
            imdb_url,
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

  const { name, desc, tag, pop, release, lang, image, imdb_url } = movie;

  return (
    <section className="section movie-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <div className="section-title"></div>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">Name: </span> {name}
          </p>
          <p>
            <span className="drink-data">Tagline: </span> {tag}
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
          <p>
            <a href={imdb_url} className="btn btn-primary">
              IMDB
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
