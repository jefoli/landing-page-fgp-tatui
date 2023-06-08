import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
  gap: 30px;
  max-width: 100%;
  padding: 20px;
  justify-content: center;
  /* Estilos para telas menores que 768px */
  @media (max-width: 768px) {
    gap: 15px;
  }

  /* Estilos para telas menores que 480px */
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Default = styled.div`
  color: #000000;
  padding: 20px;
  text-align: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.2;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  /* Estilos para telas menores que 480px */
  @media (max-width: 480px) {
    padding: 5px;
  }

`;
