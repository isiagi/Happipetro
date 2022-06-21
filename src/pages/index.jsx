import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Contact from "./contact/Contact";
import HomePage from "./HomePage";

const index = () => {
  return (
    <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  )
}

export default index