import Section0Portada from "../Home/Section0Portada"
import Section1Intro from "../Home/Section1Intro"
import Section2Gallery from "../Home/Section2Gallery"
import Section3Testimonials from "../Home/Section3Testimonials"
import Section4FrequentQuestions from "../Home/Section4FrequentQuestions"
import Services from "../Home/Services/Services"
const HomePages = () => {
  return (
    <div>
      <Section0Portada/>
       <Section1Intro/>
       <Services/>
       <Section2Gallery/>
       <Section3Testimonials/>
       <Section4FrequentQuestions/>
    </div>
  )
}

export default HomePages