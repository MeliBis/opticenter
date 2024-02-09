import imgContacto from '../../assets/products/contacto.png'
import imgSol from '../../assets/products/sol.png'
import imgProguesivos from '../../assets/products/progresivos.png'
const CarouselProductsArmazon = () => {
  return (
    <div className=" container d-flex justify-content-center margen">
    {/*       <h2 className='text-center'>Testimonios</h2>
     */}{" "}
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide  text-center "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner  ">
        <div className="carousel-item active ">
          <div className="card card-testimonial_style" style={{ width: "20rem" }}>
            <img src={imgSol} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lentes de sol</h5>
              <p className="card-text text-secondary">
              Se usan para proteger los ojos de los rayos ultravioleta (UV) del sol. También pueden ayudar a reducir el deslumbramiento y mejorar la comodidad visual.              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="card card-testimonial_style" style={{ width: "18rem" }}>
            <img src={imgProguesivos} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lentes progresivas</h5>
              <p className="card-text text-secondary">
              Son lentes multifocales que no tienen líneas visibles. Ofrecen una visión clara a todas las distancias.              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="card card-testimonial_style" style={{ width: "18rem" }}>
            <img src={imgContacto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Lentes de contacto </h5>
              <p className="card-text text-secondary">
                Son lentes delgadas que se colocan sobre la superficie del ojo. Se pueden usar para corregir la visión, mejorar la comodidad visual o por razones cosméticas.              </p>
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
  )
}

export default CarouselProductsArmazon