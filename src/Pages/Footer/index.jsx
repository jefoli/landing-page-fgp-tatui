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
        <div>
          <Styled.ContactBox>
            <p>
              <BiPhoneCall />
              (15) 3284-4001
            </p>
            <p>
              <FaWhatsapp /> (15) 99825-3779
            </p>
            <p>
              <AiOutlineMail />
              secretaria@fgp.com.br
            </p>
          </Styled.ContactBox>
        </div>
      </Styled.Contact>
      <Styled.SocialMediaIconsContainer>
        <FaInstagramSquare
          href="https://www.instagram.com/fgp_tatui/"
          target="_blank"
          rel="noreferrer"
        />
        <FaFacebookSquare
          href="https://www.facebook.com/fgptatui"
          target="_blank"
        />
        <FaLinkedin
          href="https://www.instagram.com/fgp_tatui/"
          target="_blank"
          rel="noreferrer"
        />
        <IoLogoYoutube
          href="https://www.instagram.com/fgp_tatui/"
          target="_blank"
          rel="noreferrer"
        />
      </Styled.SocialMediaIconsContainer>
      <p>
        © 2023 - FGP Tatuí | Desenvolvido por Jeferson Oliveira - HIFT
        Tecnologia
      </p>
    </Styled.Wrapper>
  );
};
