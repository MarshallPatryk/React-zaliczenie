import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  @media (min-width: 63em) {
    height: 100vh;
    flex-direction: row;
  }
`;
