import "./SearchBar.scss";

const SearchBar = ({ value , onChange}) => {
    return (
    <input
        id="search-bar"
        type="search" 
        placeholder="Find beer" 
        name="q" 
        className="search"
        value={value}
        onChange={onChange}
    />
    );
};

export default SearchBar;
