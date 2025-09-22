import institution_img from "../../assets/institucion_cpem.webp";
import { motion } from "framer-motion";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero section bg-dark">
      <div className="image-background">
        <img
          className="institution-image"
          src={institution_img}
          alt="Institución educativa Cpem N°83"
        />
        <div className="image-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                CPEM 83 Taquimilán
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} 
              >
                Es un establecimiento educativo rural de gestión pública ubicado
                en el Departamento de Ñorquin de la Provincia de Neuquén. La
                institución educativa “C.P.E.M. 83” brinda servicios educativos
                de gestión estatal en la modalidad de educación común en el
                nivel secundario.
              </motion.p>
              <div
                className="hero-buttons"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a href="#about" className="btn btn-primary">
                  Get Started
                </a>
                <a href="#services" className="btn btn-outline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
