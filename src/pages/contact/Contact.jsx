import MapComponent from "../../components/map/map";
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import "./contact.css";
import React from "react";

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact__container">
      <div className="contact__head">
        <h1>Contact</h1>
      </div>
      <div className="contact__grid">
        <div className="contact__sec1">
          <h2>Contact us to get more information</h2>
          <p><MdOutlineMarkEmailRead className="contact__icon" /> ffsgsyysus@gmail.com</p>
          <p><BsFillTelephoneOutboundFill className="contact__icon"/> +256777797887777</p>
          <p><HiOutlineLocationMarker className="contact__icon"/> Ham Towers</p>
        </div>
        <div className="contact__sec2">
          <form>
            <div className="form__row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form__row">
              <input type="text" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Company" />
            </div>
            <div className="form__row textarea">
              <textarea rows={9} placeholder="Enter Massage Here" />
            </div>
            <div className="form__btn">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <MapComponent />
    </div>
  );
};

export default Contact;
