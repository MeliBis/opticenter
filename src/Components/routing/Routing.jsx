import {
    Routes,
    Route,
    BrowserRouter as Router,
  
  } from "react-router-dom";
import HomePages from "../Pages/HomePages";
import Footer from "../Generales/Footer";
import Navbar from "../Generales/Navbar";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";

const Routing = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePages/>}/>
            <Route path="/acerca" element={<AboutPage/>}/>
            <Route path="/contacto" element={<ContactPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default Routing