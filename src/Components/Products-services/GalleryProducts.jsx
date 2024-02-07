import { Link } from 'react-router-dom'
import imgGalleryProduct1 from '../../assets/gallery/5.jpg'

const GalleryProducts = () => {
  return (
  /*   <div className='container-fluid'>
        <h2 className="text-center p-2 h2-gallery">Lo más nuevo</h2>
        <div className="row gallery-row">
            <div className="column gallery-column ">
                <img className='gallery-img img-fluid ' src={imgGalleryProduct1} alt="" />
                <img className='gallery-img img-fluid ' src={imgGalleryProduct1} alt="" />
                <img className='gallery-img img-fluid' src={imgGalleryProduct1} alt="" />
            </div>
            <div className="column gallery-column">
                <img className='gallery-img img-fluid 'src={imgGalleryProduct1} alt="" />
                <img className='gallery-img img-fluid 'src={imgGalleryProduct1} alt="" />
                <img className='gallery-img img-fluid ' src={imgGalleryProduct1} alt="" />
            </div>
             <div className="column gallery-column">
                <img className='gallery-img img-fluid' src={imgGalleryProduct1} alt="" />
                <img className='gallery-img img-fluid' src={imgGalleryProduct1} alt="" />
                <img className='gallery-img img-fluid' src={imgGalleryProduct1} alt="" />
            </div> 
        </div>
    </div> */
    <section className="page-section bg-light margen" >
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase mt-5 mb-5">Lo más nuevo</h2>
        {/* <h3 className="section-subheading text-muted mb-5 mt-3">
          Cuída tus ojos, cuida tu futuro.</h3> */}
      </div>
      <div className="row ">
        <div className="col-lg-4 col-sm-6 mb-4 gallery-column">
          {/* Portfolio item 1*/}
          <div className="portfolio-item">
            <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid gallery-img" src={imgGalleryProduct1} alt="..." />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 2*/}
          <div className="portfolio-item">
            <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid " src={imgGalleryProduct1} alt="..." />
            </Link>
          
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 3*/}
          <div className="portfolio-item">
            <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src={imgGalleryProduct1} alt="..." />
            </Link>
        
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          {/* Portfolio item 4*/}
          <div className="portfolio-item">
            <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal4">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src={imgGalleryProduct1} alt="..." />
            </Link>
         
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
          {/* Portfolio item 5*/}
          <div className="portfolio-item">
            <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal5">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src={imgGalleryProduct1} alt="..." />
            </Link>
       
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Portfolio item 6*/}
          <div className="portfolio-item">
            <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal6">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src={imgGalleryProduct1} alt="..." />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GalleryProducts