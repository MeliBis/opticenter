import imgService from "../assets/services/img-services.jpg";

const Services = () => {
  return (
    <section >
      <h2 className="text-center">Nuestros servicios</h2>
      <div className="container mt-5" >
        <div className="row">
          <div
            className="img-fluid col-lg-6"
            style={{
              backgroundImage: `url(${imgService})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            data-aos="fade-right"
          />
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
            <div
              className="icon-box mt-5 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <h4>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  fill="currentColor"
                  className="bi bi-eye mx-3 text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>
                Exámen visual
              </h4>
              <ul>
                <li>
                  Agudeza visual: Se mide con la tabla de Snellen para
                  determinar la nitidez de tu vista.
                </li>
                <li>
                  Agudeza visual con estenopeico: Se usa un orificio para
                  descartar errores refractivos.
                </li>
                <li>
                  Reflejos pupilares: Se observa la reacción de las pupilas a la
                  luz.
                </li>
                <li>Forias: Se evalúa la alineación de los ojos.</li>
                <li>
                  Tonometría: Se mide la presión intraocular para detectar
                  glaucoma.
                </li>
              </ul>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-cube-alt" />
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  fill="currentColor"
                  className="bi bi-sunglasses mx-3 text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A2 2 0 0 0 8 6a2 2 0 0 0-1.112.338A2 2 0 0 0 5 5zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1" />
                </svg>
                Adaptación de lentes
              </h4>
              <p>
                La adaptación de lentes en una óptica es un proceso que se
                realiza después de un examen visual completo. Su objetivo es
                determinar las lentes oftálmicas más adecuadas para tus
                necesidades visuales y estilo de vida.
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-images" />
              <h4>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  fill="currentColor"
                  className="bi bi-eye-slash mx-3 text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                </svg>
                Evaluación oftalmológica para descartar infección
              </h4>
              <h5 className="text-secundary ">
                Es necesaria si presentas síntomas como:{" "}
              </h5>
              <ul>
                <li>Enrojecimiento</li>
                <li>Dolor</li>
                <li>Secreción</li>
                <li>Sensibilidad a la luz</li>
                <li>Visión borrosa</li>
                <li>Picazón</li>
                <li>Hinchazón</li>
              </ul>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-shield" />
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  fill="currentColor"
                  className="bi bi-bullseye mx-3 text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
                La extracción de un cuerpo extraño
              </h4>
              <p>
                Se realiza cuando un objeto pequeño, como una astilla de metal,
                polvo, vidrio o arena, se introduce en el ojo y no puede ser
                retirado con un simple lavado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
