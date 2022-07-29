import "./Button.scss";

const Button = ({ label, isPrimary }) => {
  return (
    <button
      type="submit"
      id={`${label}-button`}
      className={isPrimary ? "button" : "button button--secondary"}
    >
      {label}
    </button>
  );
};

export default Button;
