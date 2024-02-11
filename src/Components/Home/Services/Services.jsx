import { Link } from 'react-router-dom'
import productsIcon from '../../../assets/products/gafas.png'
import servicesIcon from '../../../assets/services/services.svg'
import sucursalIcon from '../../../assets/services/sucursal-icono.svg'
const Services = () => {
  return (
    <div className=''>
<div className="container intro-section ">
      <section className="page-section" >
        <div className="container">
          <div className="text-center">
   
            <h3 className="section-subheading text-muted margen">
             Tecnología de última generación: "Los mejores resultados para tu visión."
            </h3>
          </div>
          <div className="row text-center mt-5 ">
            <div className="col-md-4 ">
              <span className="fa-stack fa-4x ">
                  <Link to='/productos'><img src={productsIcon} width={100} className="products-img mb-3  " alt="" /></Link> 
                    <Link to='/productos' className='text-decoration-none '>
                    <h4 className="mb-3 services-text ">Productos</h4>
                </Link>
               </span>
              <p className="text-muted">
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <span className="fa-stack fa-4x">
                <Link to='/servicios'><img src={servicesIcon} width={100}  alt="logo servicios " /></Link>  
                <Link to='/servicios'  className='text-decoration-none '>
                  <h4 className="my-3 services-text">Servicios</h4>
                </Link>
              </span>
           
            </div>
            <div className="col-md-4 ">
              <span className="fa-stack fa-4x">
                 <Link to='/contacto'><img src={sucursalIcon} width={100} className="products-img" alt="" /> </Link> 
                <Link to='/contacto'  className='text-decoration-none'>
                  <h4 className="my-3 services-text">Sucursales</h4>

                </Link>
              </span>
           
            </div>
          </div>
        </div>
      </section>
    </div>
</div>
  )
}

export default Services