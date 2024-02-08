/* import data from '../Data/testimonials'
 */import imgTestimonial from '../../assets/testimonials/mel.jpeg'

const Section3Testimonials = () => {
  return (
    <div className=" container d-flex justify-content-center margen">
{/*       <h2 className='text-center'>Testimonios</h2>
 */}      <div
        id="carouselExampleAutoplaying"
        className="carousel slide  text-center margen"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner  ">
          <div className="carousel-item active ">
            <div className="card p-3" style={{ width: "30rem" }}>
              <img src='' className=" img-" alt="..." />
              <div className="card-body">
              <h5 className='text-secondary mb-1'>Melissa Barrios</h5>
              <h6 className='text-secondary'>Zacatlán, Puebla</h6>

                <p className="text-secondary">
                Hace unos meses comencé a tener problemas de visión y decidí visitar Opti Center. Desde el primer momento, me sentí muy bien atendida. Me realizaron un examen visual completo y me explicaron con detalle las diferentes opciones que tenía para corregir mi vista.
                </p>
                
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Section3Testimonials;
