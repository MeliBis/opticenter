import CarouselProducts from "../Products-services/CarouselProducts"
import CarouselProductsArmazon from "../Products-services/CarouselProductsArmazon"
import GalleryProducts from "../Products-services/GalleryProducts"
import IconosProducts from "../Products-services/IconosProducts"
import IntroProducts from "../Products-services/IntroProducts"

const ProductsPage = () => {
  return (
    <div>
      <IntroProducts/>
      <IconosProducts/>
      <h2 className="container text-center margen">Elije el armazon que se adapte a tu esencia</h2>
      <CarouselProducts/>

      <GalleryProducts/>
      <h2 className="container margen text-center">¿Por qué debo utilizar lentes?</h2>
      <CarouselProductsArmazon/>

    </div>
  )
}

export default ProductsPage