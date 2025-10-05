import "./EducationalOffer.css";
import bannerinscriptions from "../../assets/bannerinscriptions.webp";
import { useEffect } from "react";
import purecounter from "@srexi/purecounterjs";

const EducationalOffer = () => {
  useEffect(() => {
    new purecounter();
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Oferta Educativa</h2>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-1 order-lg-1" data-aos="fade-left" data-aos-delay="300">
            <div className="image-wrapper">
              <img
                src={bannerinscriptions}
                alt="About us"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6 order-2 order-lg-2">
            <div className="content">
              <h2>El aprendizaje comienza con nosotros</h2>
              <p className="lead">
                En nuestra Institución, ofrecemos entornos de apoyo e inspiración para que jóvenes aprendan y crezcan con nosotros. También contamos con un Turno Vespertino para que adultos y adultas de la localidad y zonas aledañas puedan realizar su trayecto de educación secundaria. Nos esforzamos por formar pensadores seguros y creativos, y buscamos brindar una educación verdaderamente relevante para su futuro.
              </p>
              <p>
                Cada logro comienza con una decisión. Este puede ser el inicio de un viaje que te acompañará toda la vida.
              </p>
            </div>
          </div>

          <div className="col-12 order-3">
            <div className="stats-wrapper">
              <div className="stat-item">
                <span
                  className="number purecounter"
                  data-purecounter-start="0"
                  data-purecounter-end="8"
                  data-purecounter-duration="1"
                ></span>
                <span className="label">Años de Trayectoria</span>
              </div>
              <div className="stat-item">
                <span
                  className="number purecounter"
                  data-purecounter-start="0"
                  data-purecounter-end="150"
                  data-purecounter-duration="1"
                ></span>
                <span className="label">Proyectos realizados</span>
              </div>
              <div className="stat-item">
                <span
                  className="number purecounter"
                  data-purecounter-start="0"
                  data-purecounter-end="12"
                  data-purecounter-duration="1"
                ></span>
                <span className="label">Docentes y colaboradores</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationalOffer;
