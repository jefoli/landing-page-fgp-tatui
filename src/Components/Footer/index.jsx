import { BsFacebook } from 'react-icons/bs-facebook';

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <a
        href="https://www.facebook.com/fgptatui"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin social-icons"></i>
      </a>

      <BsFacebook
        href="https://www.facebook.com/fgptatui"
        target="_blank"
        rel="noreferrer"
      />

      <a href="https://www.instagram.com/fgp_tatui/">
        <i className="fa-brands fa-square-instagram social-icons"></i>
      </a>
      <p>
        © 2023 - FGP Tatuí | Desenvolvido por Jeferson Oliveira - HIFT
        Tecnologia
      </p>
    </footer>
  );
};
