import "./ProjectsInstitution.css";
import projects from "./projectsData";

const ProjectsInstitution = () => {
  return (
    <section id="portfolio" className="portfolio section mb-5">
      <div className="container section-title" data-aos="fade-up">
        <h2>Proyectos Escolares</h2>
        <p>Explora el talento y la dedicación de nuestros estudiantes a través de sus trabajos.</p>
      </div>

      <div className="container mt-5" data-aos="fade-up" data-aos-delay="100">
        <div className="isotope-layout" data-default-filter="*" data-layout="fitRows" data-sort="original-order">
          <div className="row gy-5 portfolio-grid container" data-aos="fade-up" data-aos-delay="200">
            {projects.map(project => (
              <div key={project.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category}`}>
                <div className="portfolio-card">
                  <div className="image-container">
                    <img src={project.image} className="img-fluid" alt={project.alt} loading="lazy" />
                    <div className="overlay">
                      <div className="overlay-content">
                        <a href={project.image} className="glightbox zoom-link" title={project.zoomTitle}>
                          <i className="bi bi-zoom-in"></i>
                        </a>
                        <button className="button-detais-projects">
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsInstitution;
