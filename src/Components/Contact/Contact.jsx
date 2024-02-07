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
             Dirección, Teléfono <br/>
             <button className="btn btn-secondary">Ir allá</button>
            </p>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-lg-6 text-white showcase-img second-section-img"
           
          />
          <div className="col-lg-6 my-auto showcase-text">
            <h2>Sucursal Zona Centro</h2>
            <p className="lead mb-0">
            Dirección, Teléfono <br/>
            <button className="btn btn-secondary">Ir allá</button>
            </p>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img third-section-img"
            
          />
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Extra</h2>
            <p className="lead mb-0">
           extra
            </p>
            <br/>
            <button className="btn btn-secondary">Ir allá</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
