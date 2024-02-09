import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <section className="showcase">
        <h2 className="text-center margin mb-3 fw-bold">Contactáme</h2>
        <h4 className="text-center mb-5">Descubre el mundo con claridad</h4>
       
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img firs-section-img"

          />
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Sucursal Boulevard Matamoros</h2>
            <p className="lead mb-0">
            Calle 5 de febrero, colonia 5 de febrero<br/>
            </p>
            <p className="text-secondary">Teléfono: 7971214538</p>
            <Link className="btn btn-primary btn-xl " target="_blank" to="https://acortar.link/KlUlRH">Ir allá</Link>

          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-lg-6 text-white showcase-img second-section-img"
           
          />
          <div className="col-lg-6 my-auto showcase-text">
            <h2>Sucursal Zona Centro</h2>
            <p className="lead mb-0">
            Calle Hermenegildo Galeana 10<br/>
            <p className="text-secondary">Teléfono: 7971415421</p>

            <Link className="btn btn-primary btn-xl "target="_blank" to="https://acortar.link/BZRwEJ">Ir allá</Link>

            </p>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img third-section-img"
            
          />
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Jornadas visuales</h2>
            <p className="lead mb-0">
            ¡Visítanos en las próximas jornadas visuales y descubre cómo podemos ayudarte a mejorar tu visión!
            </p>
            <br/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
