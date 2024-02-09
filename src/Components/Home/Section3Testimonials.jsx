/* import data from '../Data/testimonials'
 */
import imgTestimonialMel from "../../assets/testimonials/meli.jpg";
import imgTestimonialCata from "../../assets/testimonials/cata.jpg";
 import imgTestimonialIbhar from "../../assets/testimonials/ibhar.jpg";

const Section3Testimonials = () => {
  return (
    <div className=" container d-flex justify-content-center margen">
      {/*       <h2 className='text-center'>Testimonios</h2>
       */}{" "}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide  text-center margen"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner  ">
          <div className="carousel-item active ">
            <div className="card card-testimonial_style" style={{ width: "20rem" }}>
              <img src={imgTestimonialCata} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cata Micaela Barrios</h5>
                <p className="card-text text-secondary "><b> Zacatlán, Puebla</b> </p>
                <p className="card-text text-secondary">
                  Estuve buscando unas gafas nuevas durante mucho tiempo y no encontraba unas que me gustaran hasta que visité Opti Center. En esta óptica tienen una gran variedad de monturas y lentes para todos los gustos y presupuestos.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="card card-testimonial_style" style={{ width: "18rem" }}>
              <img src={imgTestimonialMel} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Melissa Barrios </h5>
                <p className="card-text text-secondary "><b> Zacatlán, Puebla</b> </p>
                <p className="card-text text-secondary">
                Hace unos meses que comencé a tener problemas de visión y decidí visitar Opti Center. Desde el primer momento, me sentí muy bien atendido por el equipo de profesionales. Me realizaron un examen visual completo y me explicaron con detalle las diferentes opciones que tenía para corregir mi vista.
                </p>
             
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="card card-testimonial_style" style={{ width: "18rem" }}>
              <img src={imgTestimonialIbhar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ibhar Jimenez</h5>
                <p className="card-text text-secondary "><b> Zacatlán, Puebla</b> </p>

                <p className="card-text text-secondary">
                Visité Opti Center buscando unas gafas nuevas y me encantó la atención personalizada que recibí. El personal me dedicó todo el tiempo necesario para asesorarme sobre las diferentes opciones que tenía disponibles, teniendo en cuenta mis necesidades y presupuesto.
                </p>
               
              </div>
            </div>
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
