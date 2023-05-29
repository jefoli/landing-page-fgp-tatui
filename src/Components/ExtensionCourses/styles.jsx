import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;	
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
  gap: 30px;
  max-width: 100%;
  padding: 20px;

  .test {
}
`;

export const Default = styled.div`
  color: #000000;
  padding: 20px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.2;
    z-index: 1;
  }

`;
