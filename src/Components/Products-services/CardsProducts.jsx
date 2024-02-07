import { Link } from "react-router-dom"

const CardsProducts = () => {
  return (
    <div>
            <h2 className='container py-4  justify-content-center '>No busques más! Aquí encontrás los mejores y auténticos sabores  asiáticos</h2>
  <div className=" d-flex mx-auto align-items-center justify-content-center row row-cols-5 ">

    <div className="card mt-4 ms-4 mb-4" style={{width: '18rem'}}>
      <img src='' className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Sushi</h5>
        <p className="card-text">Tus ojos merecen lo mejor, elige nuestros armazones.</p>
        <Link to="/" className="btn btn-dark">Aquí</Link>
      </div>
    </div>
    </div>

    </div>
    
  )
}

export default CardsProducts