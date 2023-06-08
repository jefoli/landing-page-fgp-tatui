import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: black;
  text-align: center;

  > p {
  color: rgb(255, 255, 255);
  font-size: 15px;
  padding: 20px 0;
  }

  svg {
  font-size: 30px;
  color: rgb(245, 203, 17);
  }
`;

export const Contact = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;

  > svg {
  font-size: 30px;
  color: rgb(245, 203, 17);
  transform: scaleX(-1);
  }
`;
