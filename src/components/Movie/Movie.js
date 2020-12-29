import React from "react";
import styled from "styled-components";

const Styledli = styled.li`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 18%;
  margin: 1%;
  font-family: Roboto, sans-serif;
  color: lightgrey;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const image = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ poster_path, title }) => {
  return (
    <Styledli>
      <StyledImg src={image + poster_path} alt={title} />
      <p>{title}</p>
    </Styledli>
  );
};

export default Movie;
