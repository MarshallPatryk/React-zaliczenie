import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3px 32px 32px 32px;
  display: grid;
  min-height: auto;
  grid-gap: 24px;
  grid-template-rows: 50px 150px 150px 150px 100px 100px 150px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'SearchPlace SearchPlace'
    'FirstPlace FirstPlace'
    'SecondPlace ThirdPlace'
    'FourthPlace FifthPlace'
    'SixthPlace SixthPlace'
    'SixthPlace SixthPlace'
    'SeventhPlace SeventhPlace';

  @media (min-width: 63em) {
    grid-template-rows: 0.125fr 0.5fr 0.5fr 0.5fr;
    grid-template-columns: 0.6fr 0.6fr 0.5fr 0.5fr;
    grid-template-areas:
      'SearchPlace SearchPlace SearchPlace SearchPlace'
      'FirstPlace FirstPlace SecondPlace ThirdPlace'
      'SixthPlace SixthPlace FourthPlace FifthPlace'
      'SixthPlace SixthPlace SeventhPlace SeventhPlace';
  }
`;

export const SearchPlace = styled.div`
  grid-area: SearchPlace;
  display: flex;
  background-color: ${({ theme }) => theme.colors.element};
  padding: 0 16px;
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  width: 100%;
  margin-top: 10px;
  @media (min-width: 63em) {
    flex-direction: row;
  }
`;
export const FirstPlace = styled.div`
  grid-area: FirstPlace;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  padding: 5px;
`;

export const SecondPlace = styled.div`
  grid-area: SecondPlace;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  padding: 5px;
`;

export const ThirdPlace = styled.div`
  grid-area: ThirdPlace;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  padding: 5px;
`;

export const SixthPlace = styled.div`
  grid-area: SixthPlace;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  padding: 5px;
`;

export const FourthPlace = styled.div`
  grid-area: FourthPlace;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  padding: 5px;
`;

export const FifthPlace = styled.div`
  grid-area: FifthPlace;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  padding: 5px;
`;

export const SeventhPlace = styled.div`
  grid-area: SeventhPlace;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0px 4px 5px -2px rgba(66, 68, 90, 1);
  padding: 5px;
`;
