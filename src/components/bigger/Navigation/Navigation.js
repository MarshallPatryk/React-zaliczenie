import React, { useState } from 'react';
import {
  HamburgerMenu,
  Logo,
  NavbarContainer,
  StyledFontAwesomeIcon,
} from './Navigation.style';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavigationLinks from '../../small/NavigationLinks/NavigationLinks';

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Logo"
          />
        </Logo>
        <NavigationLinks />
        {!openMenu ? (
          <StyledFontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
        ) : (
          <StyledFontAwesomeIcon icon={faXmark} onClick={handleOpenMenu} />
        )}
      </NavbarContainer>
      <HamburgerMenu openMenu={openMenu}>
        <NavigationLinks />
      </HamburgerMenu>
    </>
  );
};

export default Navigation;
