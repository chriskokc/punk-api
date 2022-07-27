import "./SideNavbar.scss";
import whiteCross from "../../assets/images/white-cross.png";
import Form from "../Form/Form";

const SideNavbar = ({ toggleSideNav , value , onSubmit , onChange }) => {
    return (
        <div className="side-navbar">
            <img className="side-navbar__white-cross" src={whiteCross} alt="white cross" onClick={toggleSideNav}/>
            <Form value={value} onSubmit={onSubmit} onChange={onChange}/>
        </div>
    );
}

export default SideNavbar;