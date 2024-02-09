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
      <CarouselProductsArmazon/>

      <GalleryProducts/>
      <h2 className="container margen text-center">carrusel productos</h2>
      <CarouselProducts/>
    </div>
  )
}

export default ProductsPage