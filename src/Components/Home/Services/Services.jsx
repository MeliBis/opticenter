import { Link } from 'react-router-dom'
import productsIcon from '../../../assets/products/gafas.png'
import servicesIcon from '../../../assets/services/services-icono.png'
import sucursalIcon from '../../../assets/services/sucursal-icono.png'
const Services = () => {
  return (
    <div className=''>
<div className="container intro-section ">
      <section className="page-section" >
        <div className="container">
          <div className="text-center">
       {/*      <h2 className="section-heading text-uppercase">Servicios</h2>
            <h3 className="section-subheading text-muted">
             Tecnología de última generación: "Los mejores resultados para tu visión."
            </h3> */}
            <h3 className="section-subheading text-muted margen">
             Tecnología de última generación: "Los mejores resultados para tu visión."
            </h3>
          </div>
          <div className="row text-center mt-5 ">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <Link to='/productos'>
                  <img src={productsIcon} width={100} className="" alt="" />
                </Link>
               </span>
              <h4 className="mb-3 ">Productos</h4>
              <p className="text-muted">
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <span className="fa-stack fa-4x">
                <Link to='/productos'>
                  <img src={servicesIcon} width={100} className="" alt="" />
                </Link>
              </span>
              <h4 className="my-3">Servicios</h4>
              <p className="text-muted">
              </p>
            </div>
            <div className="col-md-4 ">
              <span className="fa-stack fa-4x">
                <Link to='/contacto'>
                  <img src={sucursalIcon} width={100} className="" alt="" />
                </Link>
              </span>
              <h4 className="my-3">Sucursales</h4>
              <p className="text-muted">
               
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
</div>
  )
}

export default Services