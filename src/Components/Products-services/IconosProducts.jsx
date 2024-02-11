import { Link } from 'react-router-dom'
import iconosProduct1 from '../../assets/products/gafas.png'
import iconosProduct2 from '../../assets/products/test.png'


const IconosProducts = () => {
  return (
    <div className="row text-center mt-5 d-flex justify-content-center">
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <Link to='/productos'>
          <img src={iconosProduct1} width={100} className="" alt="" />
        </Link>
       </span>
      <h4 className="my-3">Los mejores armazones <br /><span className='text-secondary'>a tu alcance</span></h4>
      <p className="text-muted">
      </p>
    </div>
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <Link to='/servicios'>
          <img src={iconosProduct2} width={100} className="" alt="" />
        </Link>
      </span>
      <h4 className="my-3">Primer exámen de la vista <br /><span className="text-secondary">Gratis</span></h4>
      <p className="text-muted">
      </p>
    </div>
 
  </div>
  )
}

export default IconosProducts