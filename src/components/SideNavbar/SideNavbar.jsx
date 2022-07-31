import "./SideNavbar.scss";
import whiteCross from "../../assets/images/white-cross.png";
import Form from "../Form/Form";

const SideNavbar = ({ toggleSideNav, onSubmit, onChange, onClick }) => {
  return (
    <div className="side-navbar">
      <img
        className="side-navbar__white-cross"
        src={whiteCross}
        alt="white cross"
        onClick={toggleSideNav}
      />
      <Form onSubmit={onSubmit} onChange={onChange} onClick={onClick} />
    </div>
  );
};

export default SideNavbar;
