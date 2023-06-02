import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FullPage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(https://picsum.photos/1200);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: purple;
  padding: 2rem;
  button {
    margin-top: 20px;
  }
  border-radius: 10%;
`;
export const StyledInput = styled.input`
  height: 30px;
  margin-top: 2px;
`;
