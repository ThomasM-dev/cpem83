import "./HeroDescription.css";

const HeroDescription = () => {
  return (
    <div className="container container-hero-description">
      <h2>
        El aprendizaje comienza <br />
        con nosotros
      </h2>
      <div className="row description-row">
        <div className="col-md-6 container-text">
          <p>
            En nuestra Institución, ofrecemos entornos de apoyo e inspiración
            para que jóvenes aprendan y crezcan con nosotros. También contamos
            con un Turno Vespertino para que adultos y adultas de la localidad y
            zonas aledañas puedan realizar su trayecto de educación secundaria.
            Nos esforzamos por formar pensadores seguros y creativos, y buscamos
            brindar una educación verdaderamente relevante para su futuro.
          </p>
        </div>
        <div className="col-md-6 container-text">
          <p>
            Somos una escuela rural de aprendizaje continuo que contamos con un
            proyecto en conjunto con el CFP 20 de Chos Malal, nos brinda una
            formación (Taller Electricista y Gasista). Nuestros estudiantes se
            gradúan con el carácter y la confianza necesarios para dejar su
            huella en el mundo, equipados con los conocimientos y las
            habilidades prácticas que les permitirán avanzar en el sector al que
            se dediquen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroDescription;
