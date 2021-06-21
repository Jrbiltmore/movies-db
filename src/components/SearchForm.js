import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchMovie = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  });

  return (
    <section>
      <div className="section search">
        <form className="search-form">
          <div className="form-control">
            <label htmlFor="name">Search Movie</label>
            <input
              type="text"
              id="name"
              ref={searchValue}
              onChange={searchMovie}
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
