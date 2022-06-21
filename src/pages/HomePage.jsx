import Banner from "../components/banner/Banner";
import Hero1 from "../components/hero1/Hero1";
import Img from "../components/imgM/Img";
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
    </div>
  );
};

export default HomePage;
