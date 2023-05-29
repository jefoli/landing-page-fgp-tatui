import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Bebas Neue', cursive;
  width: 100%;
  font-size: 20px;
  max-width: 380px;
  min-height: 300px;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  

  > img {
    border-radius: 15px 15px 0 0;
    width: 100%;
    object-fit: cover;
  }

  .texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center; 

    
    span {
    }
    a {
      color: #747171;
      font-family: 'Rubik', sans-serif;
      font-size: 13px;
    }
    
  }

  & :hover{
    transform: scale(1.1);
    transition: all 300ms ease-in-out;

    }
`;
