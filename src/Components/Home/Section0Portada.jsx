import { Link } from 'react-router-dom'


const Section0Portada = () => {
  return (
    <header className="masthead">
    <div className="container">
      <p className="masthead-subheading">Bienvenidos a Opti Center</p>
      <div className="masthead-heading  fs-2">¡Es un gusto verte !</div>
      <Link className="btn btn-secondary btn-xl " to="/acerca">Conócenos</Link>
    </div>
</header> 
  )
}

export default Section0Portada