import React from "react";
import { useQuery } from "react-query";
import Movies from "../Movies/Movies";

const fetchSelected = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=83e27f31dab88620ee19e659e895eb90&query="
  );
  return res.json();
};

const FilteredMovies = () => {
  const { data, status } = useQuery("popular", fetchSelected);
  console.log(data);
  console.log(status);
  return (
    <Movies url="https://api.themoviedb.org/3/movie/popular?api_key=83e27f31dab88620ee19e659e895eb90&query="></Movies>
  );
};

// le paso el filtro, busca el endpoint y se la pasa a movies que solo es presentacional

export default FilteredMovies;
