import { useState } from "react";
import "./Navbar.scss";
import menu from "../../assets/images/menu-icon.png";
import SideNavbar from "../SideNavbar/SideNavbar";

const Navbar = ({ value, onSubmit, onChange, onClick }) => {
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
          onClick={onClick}
        />
      )}
      <img
        className="navbar__menu"
        src={menu}
        alt="menu icon"
        onClick={toggleSideNav}
      />
      <p className="navbar__brand">CK brewery</p>
    </nav>
  );
};

export default Navbar;
