import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
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
      <p>
        © 2023 - FGP Tatuí | Desenvolvido por Jeferson Oliveira - HIFT
        Tecnologia
      </p>
    </footer>
  );
};
