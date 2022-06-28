import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Contact from "./contact/Contact";
import HomePage from "./HomePage";
import Gallery from "./gallery/Gallery";
import About from "./about/About";
import Mission from "../pages/about/more/Mission";
import Vission from "./about/more/Vission";
import Value from "./about/more/Value";
import Goal from "./about/more/Goal";
import Commit from "./about/more/Commit";
import NotFound from "./notFound/NotFound";
import Service from "../components/services/Service";

const index = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="vission" element={<Vission />} />
          <Route path="value" element={<Value />} />
          <Route path="goals" element={<Goal />} />
          <Route path="commitment" element={<Commit />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default index;
