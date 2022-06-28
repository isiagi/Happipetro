import img from "../../assets/images/team.jpg";
import "./team.css";

const Team = () => {
  return (
    <div className="team__container">
      <div className="team__wrapper">
        <h1>Our Team</h1>
        <p>Meet Our Amazing Team That Makes Wonderful Things Happen</p>
      </div>
      <div className="team__card__container">
        <div className="team__card">
          <div className="team__img">
            <img src={img} alt="team_member" />
          </div>
          <div className="team__loop">
            <h2>Hallen Mpaire</h2>
            <h4>Operations Manager</h4>
            <p>
              We are quality and exception in our service and we grantee to
              exceed your expectations in an amazing way which you can never
              imagine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
