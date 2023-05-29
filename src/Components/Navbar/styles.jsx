import styled from 'styled-components';

export const Navigation = styled.section`
  height: 70px;
  background: #262626;
  display: flex;
  justify-content: space-around;


  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
  nav ul li {
  float: left;
  position: relative;
}


nav ul li a,
nav ul li a:visited {
  display: block;
  padding: 0 20px;
  line-height: 70px;
  background: #262626;
  color: #ffffff;
  text-decoration: none;
}
nav :hover,
nav :visited:hover {
  background: rgb(245, 203, 17);
  color: #ffffff;
}
`;
