import React from "react";
import styled from "styled-components";

const urlHomePage =
  "https://as01.epimg.net/meristation/imagenes/2019/03/30/noticias/1553957729_226406_1553957794_noticia_normal.jpg";

const StyledMainHome = styled.header`
  width: 100%;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
  background-color: #081c24;
  background-image: url("${urlHomePage}");
  > h1 {
    color: black;
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 97%, 0.7);
  }
`;

const MainHome = () => {
  return (
    <StyledMainHome>
      <h1>ADA BUSCADOR DE PELICULAS</h1>
    </StyledMainHome>
  );
};

export default MainHome;
