import "./SideNavbar.scss";
import SearchBar from "../SearchBar/SearchBar";

const SideNavbar = () => {
    return (
        <form action="" className="side-navbar">
            <SearchBar />
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