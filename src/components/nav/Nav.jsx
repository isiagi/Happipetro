import "./nav.css";

const Nav = () => {
  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <h1>HappiPetro</h1>
        <div className="nav__ul">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Gallery</li>
            <li className="nav__contact">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
