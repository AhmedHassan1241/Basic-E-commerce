import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Components/Home";
import MyNavbar from "./Components/MyNavbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import DetailsProduct from "./Components/DetailsProduct";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="productDetails/:productId"
            element={<DetailsProduct />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
