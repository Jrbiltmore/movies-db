import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const movieId = 157336;

// const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=af25738eca771b7b43d18ad260807848&append_to_response=`;
const url =
  "https://api.themoviedb.org/3/list/1?api_key=af25738eca771b7b43d18ad260807848&language=en-US";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [movie, setMovie] = useState([]);

  const imgUrl = "https://image.tmdb.org/t/p/w185";

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { items } = data;
      if (items) {
        const newMovies = items.map((item) => {
          const { id, title, overview, release_date, poster_path } = item;
          return {
            id: id,
            name: title,
            desc: overview,
            release: release_date,
            image: `${imgUrl}${poster_path}`,
          };
        });
        setMovie(newMovies);
      } else {
        setMovie([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, movie, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
