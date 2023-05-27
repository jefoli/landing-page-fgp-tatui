import { CustomLinks } from '../CustomLink';

export const Navbar = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <img src="./logo1.png" alt="" width="124" />
        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <CustomLinks to={'#'} name={'Inscreva-se'} />
            <CustomLinks to={'#'} name={'Home'} />
            <CustomLinks to={'#'} name={'Sobre a FPG'} />
            <CustomLinks to={'#'} name={'pós-graduação on-line'} />
            <CustomLinks to={'#'} name={'cursos de extensão'} />
            <CustomLinks to={'#'} name={'Contato'} />
            <li>
              <a href="#!">inscreva-se</a>
            </li>
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">Sobre a FPG</a>
            </li>
            <li>
              <a href="#!">pós-graduação on-line</a>
            </li>
            <li>
              <a href="#!">Cursos de Extensão</a>
            </li>
            <li>
              <a href="#!">Contato</a>
            </li>
            <li>
              <a
                href="https://www.fgp-ead.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                portal ead
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
