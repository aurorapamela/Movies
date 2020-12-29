import React from "react";
import styled from "styled-components";
import MainHome from "../MainHome/MainHome";
import Movies from "../Movies/Movies";

//normalize
//utilities

const WrapperMain = styled.div`
  width: calc(100% - 95px);
  margin-left: 95px;
  position: relative;
`;

const Home = () => {
  const urlPopular = `${process.env.REACT_APP_TMDB_URL}/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page1`;
  const urlTopRated = `${process.env.REACT_APP_TMDB_URL}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;
  const urlUpcoming = `${process.env.REACT_APP_TMDB_URL}/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;
  const urlNowPlaying = `${process.env.REACT_APP_TMDB_URL}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;

  return (
    <WrapperMain>
      <MainHome></MainHome>
      <Movies url={urlPopular}>Popular Movies</Movies>
      <Movies url={urlTopRated}>Top Rated Movies</Movies>
      <Movies url={urlUpcoming}>Upcoming Movies</Movies>
      <Movies url={urlNowPlaying}>Now Playing Movies</Movies>
    </WrapperMain>
  );
};

export default Home;
