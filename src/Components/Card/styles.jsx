import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Bebas Neue', cursive;
  width: 100%;
  font-size: 20px;
  max-width: 300px;
  min-height: 400px;
  text-align: center;
  background-color: white;
  border-radius: 15px;

  > img {
    border-radius: 15px 15px 0 0;
    width: 100%;
    object-fit: cover;
  }
`;
