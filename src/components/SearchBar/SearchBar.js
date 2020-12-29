import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const StyledSearch = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  height: 75px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: 0;
  color: #081c24;
  font-weight: 300;
  font-size: 16px;
  padding: 15px 20px 0px 65px;
`;

const StyledForm = styled.form`
  display: block;
  width: 100%;
  outline: none;
  border: 0;
  color: #081c24;
  font-weight: 300;
  font-size: 16px;
  padding: 15px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 36%;
  padding-left: 45px;
`;

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [, setMovies] = useState([]);

  const urlSearch = `${process.env.REACT_APP_TMDB_URL}/search/movie?&api_key=${process.env.REACT_APP_TMDB_KEY}&query=`;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    searchMovie &&
      fetch(urlSearch + searchMovie)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        });
    setSearchMovie(" ");
  };

  const handleOnChange = (e) => {
    setSearchMovie(e.target.value);
  };

  // usar react query para toda la logica
  // filtered movies
  // ver reducer -
  // usar react router para tomar la url en base a la busqueda

  return (
    <>
      <StyledSearch>
        <StyledForm onSubmit={handleOnSubmit}>
          <StyledInput
            type="text"
            placeholder="Search for a movie..."
            value={searchMovie}
            onChange={handleOnChange}
          ></StyledInput>
        </StyledForm>
        <StyledSearchIcon fontSize="medium" color="disabled"></StyledSearchIcon>
      </StyledSearch>
    </>
  );
};

export default SearchBar;
