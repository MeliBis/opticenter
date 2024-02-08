
const Section4FrequentQuestions = () => {
  return (
    <main className=" bg-light d-flex aling-items-center mb-5 margen">
    <section className="h-75 container-sm mx-auto">
      <h2 className=" text-center py-3">
        Preguntas frecuentes
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
           

              <span className="px-3 questionSection">¿Cuándo debo hacerme un examen de la vista?</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className='text-secondary'>Se recomienda hacerse un examen de la vista cada dos años, o más a menudo si tiene alguna condición ocular particular</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="px-3 questionSection">¿Cómo se pueden corregir los defectos visuales?</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className='text-secondary'>Los defectos visuales se pueden corregir con gafas, lentes de contacto o cirugía</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span className="px-3 questionSection">¿Cuáles son los defectos visuales más comunes? </span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className='text-secondary'>Los defectos visuales más comunes son la miopía, la hipermetropía y el astigmatismo.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <span className="px-3 questionSection">¿Qué tipo de gafas me recomiendan?</span>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className='text-secondary'>El tipo de gafas que mejor le convenga dependerá de sus necesidades visuales y de su estilo personal.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <span className="px-3 questionSection">¿Puedo usar lentes de contacto?</span>
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className='text-secondary'>
              Sí, puedes usar lentes de contacto en la mayoría de los casos. Sin embargo, es importante que te hagas un examen de la vista con un profesional de la salud visual para que pueda evaluar tu salud ocular y determinar si eres apto para usar lentes de contacto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Section4FrequentQuestions