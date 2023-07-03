import * as Styled from './styles';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';

export const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Contact>
        <h1>ATENDIMENTO</h1>

        <Styled.ContactBox>
          <Styled.contactContent>
            <BiPhoneCall />
            <p>(15) 99843-4552</p>
          </Styled.contactContent>
          <Styled.contactContent>
            <FaWhatsapp />
            <p>(15) 99825-3779</p>
          </Styled.contactContent>
          <Styled.contactContent>
            <AiOutlineMail />
            <p>secretaria@fgptatui.com.br</p>
          </Styled.contactContent>
        </Styled.ContactBox>
      </Styled.Contact>
      <Styled.SocialMediaIconsContainer>
        <a
          href="https://www.instagram.com/fgp_tatui/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare />
        </a>

        <a
          href="https://www.facebook.com/fgptatui"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>

        <a
          href="https://www.instagram.com/fgp_tatui/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <IoLogoYoutube
          href="https://www.instagram.com/fgp_tatui/"
          target="_blank"
          rel="noreferrer"
        />
      </Styled.SocialMediaIconsContainer>
      <Styled.Creator>
        © 2023 - FGP Tatuí | Desenvolvido por Jeferson Oliveira - HIFT
        Tecnologia
      </Styled.Creator>
    </Styled.Wrapper>
  );
};
