import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, StyledInput } from './SearchInput.style';

const SearchInput = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <StyledInput placeholder="Search..."></StyledInput>
    </Container>
  );
};

export default SearchInput;
