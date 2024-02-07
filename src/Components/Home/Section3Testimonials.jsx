import data from '../Data/testimonials'
import imgTestimonial from '../../assets/testimonials/meli.png'
const Section3Testimonials = () => {
  return (
    <div className="h2 container d-flex justify-content-center">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide  text-center margen"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner  ">
          <div className="carousel-item active ">
            <div className="card" style={{ width: "30rem" }}>
              <img src={imgTestimonial} className="card-img-top rounded-circle" alt="..." />
              <div className="card-body">
                <h3 className="card-text">
              Testimonio descripcion
                </h3>
                <h4 className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, fugiat.
                </h4>
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
