import Image from "react-bootstrap/Image";
import institution_image from "../../assets/cpem83-taqui-1.jpg";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Image
        src={institution_image}
        fluid
        className="hero-image"
        alt="Imagen de la institucion educativa"
      />
      <div className="hero-text">
        <h1>
          CPEM 83 <br />
          Taquimilán
        </h1>
        <p>
          Es un establecimiento educativo rural de gestión pública ubicado en el
          Departamento de Ñorquin de la Provincia de Neuquén. La institución
          educativa “C.P.E.M. 83” brinda servicios educativos de gestión estatal
          en la modalidad de educación común en el nivel secundario.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
