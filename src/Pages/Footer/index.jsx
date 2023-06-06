import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';

import * as Styled from './styles';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
export const Footer = () => {
  return (
    <Styled.Wrapper id="footer">
      <Styled.Contact>
        <h1>ATENDIMENTO</h1>
        <div>
          <h5>
            <BiPhoneCall />
            (15) 3284-4001 | <FaWhatsapp /> (15) 99825-3779 | <AiOutlineMail />
            secretaria@fgp.com.br
          </h5>
        </div>
      </Styled.Contact>
      <FaInstagramSquare
        className="social-icons"
        href="https://www.instagram.com/fgp_tatui/"
        target="_blank"
        rel="noreferrer"
      />

      <FaFacebookSquare
        className="social-icons"
        href="https://www.facebook.com/fgptatui"
        target="_blank"
      />

      <FaLinkedin
        className="social-icons"
        href="https://www.instagram.com/fgp_tatui/"
      />
      <IoLogoYoutube
        className="social-icons"
        href="https://www.instagram.com/fgp_tatui/"
      />
      <p>
        © 2023 - FGP Tatuí | Desenvolvido por Jeferson Oliveira - HIFT
        Tecnologia
      </p>
    </Styled.Wrapper>
  );
};
