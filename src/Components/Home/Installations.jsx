import { Link } from "react-router-dom";
import imgInstallation1 from '../../assets/installations/eye-woman1.jpg'
import imgInstallation2 from '../../assets/installations/optometry2.jpg'
import imgInstallation3 from '../../assets/installations/eye-woman3.jpg'
import imgInstallation4 from '../../assets/installations/optometry1.jpg'
import imgInstallation5 from '../../assets/installations/eye-woman2.jpg'
import imgInstallation6 from '../../assets/installations/optometry3.jpg'

const Installations = () => {
  return (
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
              <img className="img-fluid gallery-img" src={imgInstallation1} alt="..." />
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
              <img className="img-fluid " src={imgInstallation2} alt="..." />
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
              <img className="img-fluid" src={imgInstallation3} alt="..." />
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
              <img className="img-fluid" src={imgInstallation4} alt="..." />
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
              <img className="img-fluid" src={imgInstallation5} alt="..." />
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
              <img className="img-fluid" src={imgInstallation6} alt="..." />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Installations;
