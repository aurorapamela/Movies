import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
    background-color: pink;
    width: 95px;
    height: 75px;
    background-image: url("https://png.pngtree.com/element_our/png_detail/20181227/movie-icon-which-is-designed-for-all-application-purpose-new-png_287896.jpg");
    background-size: cover;
    background-position: 20% 20%;
    }
`;

const Logo = () => {
  return <StyledLogo></StyledLogo>;
};

export default Logo;
