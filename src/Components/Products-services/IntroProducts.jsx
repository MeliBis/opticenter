import { Link } from "react-router-dom"
import imgProduct from '../../assets/products/gafas.png'

const IntroProducts = () => {
  return (
    <div>
    <div>
      <div className="container col-xxl-8 px-4 ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={imgProduct} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold lh-1 mb-3">Tus ojos merecen lo mejor,<span className="text-warning">elige nuestros armazones  </span> </h2>
            <p className="lead">Armazones para hombres, mujeres y niños."</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to='/menu' className="text-reset">
              <button type="button" className="btn btn-secondary btn-lg px-4">Ver más</button>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
    </div>

</div>
  )
}

export default IntroProducts