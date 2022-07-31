import "./Form.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const Form = ({ onSubmit, onChange, onClick }) => {
  return (
    <>
      <Button label="Reset" isPrimary={false} onClick={onClick} />
      <form onSubmit={onSubmit}>
        <SearchBar />
        <Button label="Search" isPrimary={true} />
        <div className="form">
          <label htmlFor="high-ABV" id="high-ABV" className="form__label--vol">
            High ABV (&gt; 6.0%)
          </label>
          <input
            type="checkbox"
            className="form__checkbox--vol"
            onChange={onChange}
          />

          <label
            htmlFor="high-IBU"
            id="high-IBU"
            className="form__label--bitterness"
          >
            High IBU (&gt; 50.0)
          </label>
          <input
            type="checkbox"
            className="form__checkbox--bitterness"
            onChange={onChange}
          />

          <label
            htmlFor="classic-range"
            id="classic-range"
            className="form__label--range"
          >
            Classic Range
          </label>
          <input
            type="checkbox"
            className="form__checkbox--range"
            onChange={onChange}
          />

          <label
            htmlFor="acidity"
            id="acidity"
            className="form__label--acidity"
          >
            Acidic (ph &lt; 4){" "}
          </label>
          <input
            type="checkbox"
            className="form__checkbox--acidity"
            onChange={onChange}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
