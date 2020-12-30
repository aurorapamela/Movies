import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import styled from "styled-components";

const StyledWrapperMovies = styled.div``;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
`;

const StyledTitle = styled.h2`
  margin: 1%;
  color: #081c24;
  font-weight: 300;
`;

const StyledViewAll = styled.a`
  text-decoration: none;
  margin: 1%;
  color: grey;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const Movies = ({ children, url, limit = 5 }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setMovies(data.results);
      });
  }, [url]);

  return (
    <StyledWrapperMovies>
      <StyledHeader>
        <StyledTitle>{children}</StyledTitle>
        <StyledViewAll href="/">View All</StyledViewAll>
      </StyledHeader>
      <StyledUl>
        {movies
          .map((movie) => <Movie key={movie.id} {...movie} />)
          .slice(0, limit)}
      </StyledUl>
    </StyledWrapperMovies>
  );
};

export default Movies;
