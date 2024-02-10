import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Card = ({title, description,img,city}) => {
  return (
    <div className="card text-center background mt-5">
    <img className='cardImg' src={img} alt={title} />
    <div className="card-body">
      <h4 className="card-title">{title} {name}</h4>
     <p>{city}</p>
      <p className="card-text ">
        {description}
      {/*   {
            description ? description  : 'Encuentra los mejores armazones en Opti Center'
        } */}
        </p>
   {/*    <Link to={url} className="btn btn-outline-light rounded-0" target='_blank'>
        {action} {actionSpeciality}
      </Link> */}
    </div>
  </div>
  )
}
Card.propTypes ={
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    url:PropTypes.string,
    img:PropTypes.string
}
export default Card