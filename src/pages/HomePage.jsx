import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Hero1 from "../components/hero1/Hero1";
import Img from "../components/imgM/Img";
import Join from "../components/join/Join";
import Learn from "../components/learn/Learn";
import MapComponent from "../components/map/map";
import Nav from "../components/nav/Nav";
import Service from "../components/services/Service";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero1 />
      <Banner />
      <Img />
      <Service />
      <Learn />
      <MapComponent />
      <Join />
      <Footer />
    </div>
  );
};

export default HomePage;
