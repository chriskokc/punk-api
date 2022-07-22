import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
    return (
        <form action="" className="navbar">
            <SearchBar />
            <div className="navbar__content">
                <label htmlFor="" className="navbar__label--vol">High ABV (&gt; 6.0%)</label>
                <input type="checkbox" className="navbar__checkbox--vol"/>
                
                <label htmlFor="" className="navbar__label--range">Classic Range</label>
                <input type="checkbox" className="navbar__checkbox--range"/>
               
                <label htmlFor="" className="navbar__label--acidity">Acidic (ph &lt; 4) </label>
                <input type="checkbox" className="navbar__checkbox--acidity"/>
            </div>
        </form>
    );
}

export default Navbar;