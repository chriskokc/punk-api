import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <input
      id="search-bar"
      type="search"
      placeholder="🔎 Find Beers.."
      name="q"
      className="search"
    />
  );
};

export default SearchBar;
