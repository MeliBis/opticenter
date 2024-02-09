import imgContacto from '../../assets/products/contacto.png'
import imgSol from '../../assets/products/sol.png'
import imgProguesivos from '../../assets/products/progresivos.png'
const CarouselProducts = () => {
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
       
          </div>
        </div>
        <div className="carousel-item">
        <div className="card card-testimonial_style" style={{ width: "18rem" }}>
            <img src={imgProguesivos} className="card-img-top" alt="..." />
         
          </div>
        </div>
        <div className="carousel-item">
        <div className="card card-testimonial_style" style={{ width: "18rem" }}>
            <img src={imgContacto} className="card-img-top" alt="..." />
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

export default CarouselProducts