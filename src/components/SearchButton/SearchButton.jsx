import "./SearchButton.scss";

const SearchButton = ({ label }) => {
    return <input type="submit" value={label} className="search-button"/>;
};

export default SearchButton;