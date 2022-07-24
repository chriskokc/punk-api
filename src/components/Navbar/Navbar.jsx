import "./Navbar.scss";
import menu from "../../assets/images/menu-icon.png";

const Navbar = () => {
   return (
    <nav className="navbar">
        <img className="navbar__menu" src={menu} alt="menu icon" />
        <a className="navbar__brand" href="#">CK brewery</a>
    </nav>
   );

};

export default Navbar;