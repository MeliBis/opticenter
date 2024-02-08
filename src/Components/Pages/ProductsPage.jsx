import GalleryProducts from "../Products-services/GalleryProducts"
import IconosProducts from "../Products-services/IconosProducts"
import IntroProducts from "../Products-services/IntroProducts"

const ProductsPage = () => {
  return (
    <div>
      <IntroProducts/>
      <IconosProducts/>
      <GalleryProducts/>
      <h2 className="container margen text-center">carrusel productos</h2>
    </div>
  )
}

export default ProductsPage