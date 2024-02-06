import {
    Routes,
    Route,
    BrowserRouter as Router,
  
  } from "react-router-dom";
import HomePages from "../Pages/HomePages";
import Footer from "../Generales/Footer";
import Navbar from "../Generales/Navbar";

const Routing = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePages/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default Routing