import "./footer.css";

const Footer = () => {
  return (
    <div >
      <div className="footer__wrapper">
        <div className="footer__container">
          <div>
            <h1>Happi Petro</h1>
            <p>hakakka@gmail.com</p>
            <p>+256777797887777</p>
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
