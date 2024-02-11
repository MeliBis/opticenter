import imgService from '../assets/services/img-services.jpg'

const Services = () => {
  return (
    <section id="features" className="features ">
        <h2 className="text-center">Nuestros servicios</h2>
      <div className="container mt-5" data-aos="fade-up">
        <div className="row">
          <div
            className="image col-lg-6"
            style={{ backgroundImage: `url(${imgService})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
         }}
            data-aos="fade-right"
          />
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
            <div
              className="icon-box mt-5 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-receipt" />
              <h4>Exámen visual</h4>
              <ul>
                <li>Agudeza visual: Se mide con la tabla de Snellen para determinar la nitidez de tu vista.</li>
                <li>Agudeza visual con estenopeico: Se usa un orificio para descartar errores refractivos.</li>
                <li>Reflejos pupilares: Se observa la reacción de las pupilas a la luz.</li>
                <li>Forias: Se evalúa la alineación de los ojos.</li>
                <li>Tonometría: Se mide la presión intraocular para detectar glaucoma.</li>
              </ul>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-cube-alt" />
              <h4>Adaptación de lentes</h4>
              <p>
              La adaptación de lentes en una óptica es un proceso que se realiza después de un examen visual completo. Su objetivo es determinar las lentes oftálmicas más adecuadas para tus necesidades visuales y estilo de vida.
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <i className="bx bx-images" />
            <h4> Evaluación oftalmológica para descartar infección</h4>
            <h5 className="text-secundary ">Es necesaria si presentas síntomas como: </h5>
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
              <h4>La extracción de un cuerpo extraño</h4>
              <p>
                Se realiza cuando un objeto pequeño, como una astilla de metal, polvo, vidrio o arena, se introduce en el ojo y no puede ser retirado con un simple lavado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
