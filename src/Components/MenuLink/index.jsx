import { CustomLinks } from '../CustomLink';
import * as Styled from './styles';

export const MenuLink = () => {
  return (
    <Styled.WrapperMenu>
      <CustomLinks to={'/'} name="Home" />
      <CustomLinks to={'/about'} name="Sobre a FPG" />
      <CustomLinks to={'/post-graduation'} name="pós-graduação" />
      <CustomLinks to={'/extensions-courses'} name="curso de extensão" />
      <CustomLinks href="https://www.fgp-ead.com.br/" name="portal ead" />
      <img src="../src/assets/logo1.png" alt="" width="110" />
    </Styled.WrapperMenu>
  );
};
