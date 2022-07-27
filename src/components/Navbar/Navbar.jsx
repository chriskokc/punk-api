import { useState } from "react";
import "./Navbar.scss";
import menu from "../../assets/images/menu-icon.png";
import SideNavbar from "../SideNavbar/SideNavbar";

const Navbar = () => {
    const [ showSideNav, setShowSideNav ] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState("");

    const toggleSideNav = () => {
        return setShowSideNav(!showSideNav);
    };

    const handleSubmit = () => {
        alert(searchTerm);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

   return (
    <nav className="navbar">
        { showSideNav && <SideNavbar toggleSideNav={toggleSideNav} value={searchTerm} onSubmit={handleSubmit} onChange={handleSearch}/> }
        <img className="navbar__menu" src={menu} alt="menu icon" onClick={toggleSideNav}/>
        <a className="navbar__brand" href="https://punkapi.com/documentation/v2">CK brewery</a>
    </nav>
   );

};

export default Navbar;