import imgCaruselP1 from '../../assets/products/lentes/1.jpg'
import imgCaruselP2 from '../../assets/products/lentes/2.jpg'
import imgCaruselP3 from '../../assets/products/lentes/3.jpg'
import imgCaruselP4 from '../../assets/products/lentes/4.jpg'
import imgCaruselP5 from '../../assets/products/lentes/5.jpg'

const CarouselProducts = () => {
  return (
    <div className=" container d-flex justify-content-center margen">
     
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide  text-center "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner  ">
        <div className="carousel-item active ">
          <div className="card card-testimonial_style" style={{ width: "20rem" }}>
            <img src={imgCaruselP1} className="card-img-top" alt="..." />
       
          </div>
        </div>
        <div className="carousel-item">
        <div className="card card-testimonial_style" style={{ width: "18rem" }}>
            <img src={imgCaruselP2} className="card-img-top" alt="..." />
         
          </div>
        </div>
        <div className="carousel-item">
        <div className="card card-testimonial_style" style={{ width: "18rem" }}>
            <img src={imgCaruselP4} className="card-img-top" alt="..." />
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