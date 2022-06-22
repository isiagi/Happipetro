import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Contact from "./contact/Contact";
import HomePage from "./HomePage";
import Gallery from "./gallery/Gallery";

const index = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default index;
