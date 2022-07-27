import "./SideNavbar.scss";
import whiteCross from "../../assets/images/white-cross.png";
import SearchBar from "../SearchBar/SearchBar";
import SearchButton from "../SearchButton/SearchButton";

const SideNavbar = ({ toggleSideNav , value , onSubmit , onChange }) => {

    return (
        <form className="side-navbar" onSubmit={onSubmit}>
            <img className="side-navbar__white-cross" src={whiteCross} alt="white cross" onClick={toggleSideNav}/>
            <SearchBar value={value} onChange={onChange}/>
            <SearchButton label="Search"/>
            <div className="side-navbar__content">
                <label htmlFor="high-ABV" id="high-ABV" className="side-navbar__label--vol">High ABV (&gt; 6.0%)</label>
                <input type="checkbox" className="side-navbar__checkbox--vol"/>
                
                <label htmlFor="classic-range" id="classic-range" className="side-navbar__label--range">Classic Range</label>
                <input type="checkbox" className="side-navbar__checkbox--range"/>
               
                <label htmlFor="acidic" id="acidic" className="side-navbar__label--acidity">Acidic (ph &lt; 4) </label>
                <input type="checkbox" className="side-navbar__checkbox--acidity"/>
            </div>
        </form>
    );
}

export default SideNavbar;