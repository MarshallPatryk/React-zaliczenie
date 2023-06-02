import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 8px;
  max-width: 96px;
`;

export const StyledInput = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;
