import Banner from "../components/banner/Banner";
import Hero1 from "../components/hero1/Hero1";
import Img from "../components/imgM/Img";
import Join from "../components/join/Join";
// import Learn from "../components/learn/Learn";
import MapComponent from "../components/map/map";
import Service from "../components/services/Service";

const HomePage = () => {
  return (
    <div>
      <Hero1 />
      <Banner />
      <Img />
      <Service />
      {/* <Learn /> */}
      <MapComponent />
      <Join />
    </div>
  );
};

export default HomePage;
