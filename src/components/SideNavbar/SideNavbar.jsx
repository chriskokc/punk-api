import "./SideNavbar.scss";
import whiteCross from "../../assets/images/white-cross.png";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const SideNavbar = ({ toggleSideNav }) => {
    return (
        <form action="" className="side-navbar">
            <img className="side-navbar__white-cross" src={whiteCross} alt="white cross" onClick={toggleSideNav}/>
            <SearchBar />
            <Button label="Search"/>
            <div className="side-navbar__content">
                <label htmlFor="" className="side-navbar__label--vol">High ABV (&gt; 6.0%)</label>
                <input type="checkbox" className="side-navbar__checkbox--vol"/>
                
                <label htmlFor="" className="side-navbar__label--range">Classic Range</label>
                <input type="checkbox" className="side-navbar__checkbox--range"/>
               
                <label htmlFor="" className="side-navbar__label--acidity">Acidic (ph &lt; 4) </label>
                <input type="checkbox" className="side-navbar__checkbox--acidity"/>
            </div>
        </form>
    );
}

export default SideNavbar;