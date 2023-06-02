import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 14px 16px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.element};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0px 8px 10px -4px rgba(66, 68, 90, 1);
  z-index: 3;
  div:nth-child(2) {
    display: none;
  }
  @media (min-width: 63em) {
    justify-content: flex-start;
    width: 208px;
    height: 100%;
    flex-direction: column;
    gap: 30px;
    height: 100vh;

    div:nth-child(2) {
      display: flex;
    }
  }
`;

export const Logo = styled.div`
  margin: auto;
  img {
    max-height: 25px;
    max-width: 250px;
  }
  @media (min-width: 63em) {
    margin: 0;
  }
  padding-top: 10px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  height: 40px;
  @media (min-width: 63em) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.element};
  position: absolute;
  padding: 20px 20px;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  transform: translateY(-100%);
  transition: 0.3s ease-in-out;
  transform: ${(props) =>
    props.openMenu ? 'translateY(10%)' : 'translateY(100%'};
  @media (min-width: 63em) {
    display: none;
  }
`;
