import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
  gap: 30px;
  margin-bottom: 30px;

  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px;
    padding: 10px;
  }


  @media (max-width: 480px) {
    gap: 10px;
    padding: 10px;
  }
`;

export const Default = styled.div`
  color: #000000;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }

`;
