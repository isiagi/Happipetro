import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";
import "./footer.css";

const Footer = () => {
  return (
    <div >
      <div className="footer__wrapper">
        <div className="footer__container">
          <div>
            <h2 style={{color: '#FFB800'}}>Happi Petro</h2>
            <p><CgPhone className="contact__icon"/> +256 785988864</p>
            <p><AiOutlineMail className="contact__icon"/> info@happipetro.com</p>
            <p><GrMapLocation className="contact__icon"/> Ham Towers,Level 3, RM HT28<br /> Opp Makerere Main Gate, Kampala</p>
          </div>
          <div>
            <h2>Comapany</h2>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
          </div>
          <div>
            <h2>Others</h2>
            <p>Gallery</p>
            <p>Contact</p>
          </div>
          <div>
            <h2>Certificates</h2>
          </div>
        </div>
      </div>
      <div className="footer__last">
        <p>@Copyright Happi Petro 2022 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
