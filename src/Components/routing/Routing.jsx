import {
    Routes,
    Route,
    BrowserRouter as Router,
    Navigate,
  
  } from "react-router-dom";
import HomePages from "../Pages/HomePages";
import Footer from "../Generales/Footer";
import Navbar from "../Generales/Navbar";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import ProductsPage from "../Pages/ProductsPage";

const Routing = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePages/>}/>
            <Route path="/acerca" element={<AboutPage/>}/>
            <Route path="/contacto" element={<ContactPage/>}/>
            <Route path="/productos" element={<ProductsPage/>}/>

            <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
        <Footer/>
    </Router>
  )
}

export default Routing