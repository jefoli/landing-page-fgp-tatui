import { CustomLinks } from '../CustomLink';
import * as Styled from './styles';

export const Navbar = () => {
  return (
    <Styled.Navigation>
      <nav>
        <div className="nav-mobile">
          <a id="nav-toggle" href="#!">
            <span></span>
          </a>
        </div>
        <ul className="nav-list">
          <CustomLinks to={'#'} name="inscreva-se" />
          <CustomLinks to={'#'} name="Home" />
          <CustomLinks to={'#'} name="Sobre a FPG" />
          <CustomLinks to={'#'} name="pós-graduação on-line" />
          <CustomLinks to={'#'} name="cursos de extensão" />
          <CustomLinks to={'#'} name="contato" />
          <CustomLinks href={'https://www.fgp-ead.com.br/'} name="portal ead" />
          <img src="../src/assets/logo1.png" alt="" width="110" />
        </ul>
      </nav>
    </Styled.Navigation>
  );
};
