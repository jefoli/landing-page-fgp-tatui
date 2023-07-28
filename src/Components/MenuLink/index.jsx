import { CustomLinks } from '../CustomLink';
import * as Styled from './styles';
import { BsPersonCircle } from 'react-icons/bs';
import imgLogo from '../../assets/images/logo_oficial.png';
export const MenuLink = () => {
  return (
    <Styled.WrapperMenu>
      <CustomLinks to={'/'} name="Home" />
      <CustomLinks to={'/about'} name="Sobre a FPG" />
      <CustomLinks to={'/post-graduation'} name="pós-graduação" />
      <CustomLinks to={'/extensions-courses'} name="curso de extensão" />
      <CustomLinks
        name="portal ead"
        to={'https://www.fgp-ead.com.br/'}
        icon={<BsPersonCircle />}
      />
      <img src={imgLogo} alt="logo-faculdadefpg" width="110" />
    </Styled.WrapperMenu>
  );
};
