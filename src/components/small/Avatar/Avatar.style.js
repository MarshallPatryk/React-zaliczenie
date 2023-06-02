import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (min-width: 63em) {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
  }
`;

export const AvatarImg = styled.img`
  max-height: 40px;
  border-radius: 40%;
`;

