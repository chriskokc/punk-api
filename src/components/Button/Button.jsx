import "./Button.scss";

const Button = ({ label, isPrimary, onClick }) => {
  return (
    <button
      type="submit"
      id={`${label}-button`}
      className={isPrimary ? "button" : "button button--secondary"}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
