import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="container py-5 contact-form-container">
      <h2 className="text-center section-title">Contacto y Ubicación</h2>
      <p className="text-center">¿Tienes preguntas? Ponte en contacto con nosotros.</p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <h3 className="text-center mb-4">Envíanos un mensaje</h3>
          <form className="p-4 shadow rounded bg-light">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label fw-bold">
                Nombre y Apellido
              </label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Ej: Juan Pérez"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Ej: juanperez@gmail.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="motivo" className="form-label fw-bold">
                Motivo de consulta
              </label>
              <textarea
                id="motivo"
                className="form-control"
                rows="4"
                placeholder="Escriba su consulta aquí..."
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-dark px-4">
                Enviar
              </button>
            </div>
          </form>
        </div>

        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <h3 className="text-center mb-4 ">Visitanos</h3>
          <div className="map-container shadow rounded">
            <iframe
              title="Ubicación Institución"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7850895597066!2d-70.2454457732027!3d-37.51298661800165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96727bf17878a237%3A0x6208aab60cc1c1bd!2sZoom%20Cpem%20N%C2%B0%2083%20Taquimilan!5e0!3m2!1ses!2sar!4v1759609915627!5m2!1ses!2sar"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
