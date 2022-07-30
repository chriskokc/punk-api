import { useState } from "react";
import "./Navbar.scss";
import menu from "../../assets/images/menu-icon.png";
import SideNavbar from "../SideNavbar/SideNavbar";

const Navbar = ({ value, onSubmit, onClick, onChange }) => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    return setShowSideNav(!showSideNav);
  };

  return (
    <nav className="navbar">
      {showSideNav && (
        <SideNavbar
          toggleSideNav={toggleSideNav}
          value={value}
          onSubmit={onSubmit}
          onChange={onChange}
        />
      )}
      <img
        className="navbar__menu"
        src={menu}
        alt="menu icon"
        onClick={toggleSideNav}
      />
      <a className="navbar__brand" href="https://punkapi.com/documentation/v2">
        CK brewery
      </a>
    </nav>
  );
};

export default Navbar;
