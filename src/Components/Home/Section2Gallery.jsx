import Card from '../Template/Card'
import gallery from '../Data/gallery'

const Section2Gallery = () => {
  return (
    <section className="page-section bg-light margen" >
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase mt-5">Conoce lo más nuevo que cuida tu vista</h2>
        <h3 className="section-subheading text-muted mb-5 mt-3">
          Cuída tus ojos, cuida tu futuro.</h3>
      </div>

      <div className="row">
       
       {
          gallery.map(card => (
            <div key={card.id} className='col-md-4 col-md-6 col-lg-4 mb-4'  >
              <Card title={card.title} description={card.description} img={card.img}/>
            </div>
          ))
       }


        


        
      </div>
    </div>
  </section>
  )
}

export default Section2Gallery