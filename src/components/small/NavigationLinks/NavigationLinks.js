import React, { useContext } from "react";
import { Container, StyledButton } from "./NavigationLinks.style";
import { NavLink } from "react-router-dom";
import { FontSizeContext } from "../../../providers/FontProvider";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-right: 5px;
  }
`;

const NavigationLinks = () => {
  const { increaseFont, reduceFont, handleTheme, handleLogout, isSpecialTheme } =
    useContext(FontSizeContext);
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/second"> Second</NavLink>
      <NavLink to="/third">Third</NavLink>
      <NavLink to="/fourth">Fourth</NavLink>
      <ButtonContainer>
        <StyledButton onClick={increaseFont}>+</StyledButton>
        <StyledButton onClick={reduceFont}>-</StyledButton>
      </ButtonContainer>
      <StyledButton onClick={handleTheme}>{isSpecialTheme === true ? "Normal Theme" : "Special Theme"}</StyledButton>
      <StyledButton onClick={() => handleLogout()}>Logout</StyledButton>
    </Container>
  );
};

export default NavigationLinks;
