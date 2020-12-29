import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import NavItem from "./components/NavItem/NavItem";
import SearchBar from "./components/SearchBar/SearchBar";

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 95px;
  height: 709px;
`;

const WrapperNavItem = styled.div`
  width: 95px;
  top: 75px;
  font-family: Roboto, sans-serif;
`;

const WrapperMain = styled.div`
  width: calc(100% - 95px);
  margin-left: 95px;
  position: relative;
`;

const WrapperSearch = styled.div`
  height: 75px;
  margin-left: 95px;
  border-top: 0;
  border-bottom: 0;
  top: 0;
  background-color: white;
`;

function App() {
  const urlPopular = `${process.env.REACT_APP_TMDB_URL}/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page1`;
  const urlTopRated = `${process.env.REACT_APP_TMDB_URL}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;
  const urlUpcoming = `${process.env.REACT_APP_TMDB_URL}/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;
  const urlNowPlaying = `${process.env.REACT_APP_TMDB_URL}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`;

  return (
    <Router>
      <Nav>
        <Logo>
          <Link to="/"></Link>
        </Logo>
        <WrapperNavItem>
          <NavItem>
            <Link to="/popular">Popular</Link>
          </NavItem>
          <NavItem>
            <Link to="/top_rated">Top Rated</Link>
          </NavItem>
          <NavItem>
            <Link to="/upcoming">Upcoming</Link>
          </NavItem>
          <NavItem>
            <Link to="/now_playing">Now Playing</Link>
          </NavItem>
        </WrapperNavItem>
      </Nav>

      <WrapperSearch>
        <SearchBar></SearchBar>
      </WrapperSearch>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/popular">
          <WrapperMain>
            <Movies url={urlPopular} limit={20}>
              Popular Movies
            </Movies>
          </WrapperMain>
        </Route>
        <Route path="/top_rated">
          <WrapperMain>
            <Movies url={urlTopRated} limit={20}>
              Top Rated
            </Movies>
          </WrapperMain>
        </Route>
        <Route path="/upcoming">
          <WrapperMain>
            <Movies url={urlUpcoming} limit={20}>
              Upcoming
            </Movies>
          </WrapperMain>
        </Route>
        <Route path="/now_playing">
          <WrapperMain>
            <Movies url={urlNowPlaying} limit={20}>
              Now Playing
            </Movies>
          </WrapperMain>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
