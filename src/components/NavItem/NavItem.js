import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledItem = styled.div`
  ${({ color = "red" }) => `
    background-color: white;
    width: 95px;
    height: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    > a {
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: .5px;
        color: rgba(8,28,36,.7);
        cursor: pointer;
    };
    `}
`;

const NavItem = ({ children }) => {
  return <StyledItem>{children}</StyledItem>;
};

export default NavItem;
