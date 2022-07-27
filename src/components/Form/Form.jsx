import "./Form.scss";
import SearchBar from "../SearchBar/SearchBar";
import SearchButton from "../SearchButton/SearchButton";

const Form = ({ onSubmit , onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <SearchBar />
            <SearchButton label="Search"/>
            <div className="form">
                <label htmlFor="high-ABV" id="high-ABV" className="form__label--vol">High ABV (&gt; 6.0%)</label>
                <input type="checkbox" className="form__checkbox--vol" onChange={onChange}/>
                
                <label htmlFor="classic-range" id="classic-range" className="form__label--range">Classic Range</label>
                <input type="checkbox" className="form__checkbox--range" onChange={onChange}/>
                
                <label htmlFor="acidity" id="acidity" className="form__label--acidity">Acidic (ph &lt; 4) </label>
                <input type="checkbox" className="form__checkbox--acidity" onChange={onChange}/>
            </div>
        </form>
    );
};

export default Form;