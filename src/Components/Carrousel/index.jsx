export const SectionOne = () => {
  return (
    <section className="section-container-black">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-set"
              src="//www.fgp.edu.br/wp-content/uploads/2023/02/fgp.jpeg"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-set"
              src="//www.fgp.edu.br/wp-content/uploads/2022/10/BANNER-VESTIBULAR.jpg"
              alt="Segundo Slide"
            />
          </div>
          <div className="carousel-item ">
            <img
              className="d-block w-100 carousel-set"
              src="../folder.jpg"
              alt="Terceiro Slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>

      <div className="wrapper1">
        <img src="./image2.jpg" alt="" />
        <div>
          <h2>CURSOS</h2>
          <p>CONHEÇA NOSSOS CURSOS</p>
        </div>
      </div>
    </section>
  );
};
