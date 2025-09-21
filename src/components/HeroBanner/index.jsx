import institution_image from "../../assets/cpem83-taqui-1.jpg";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero section bg-dark">
      <div className="image-background">
        <img
          className="institution-image"
          src={institution_image}
          alt="Institución educativa Cpem N°83"
        />
        <div className="image-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 data-aos="fade-up" data-aos-delay="100">
                Transform Your Vision Into Reality
              </h1>
              <p data-aos="fade-up" data-aos-delay="200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
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
