import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import Main from "./containers/Main/Main";

const App = () => {
  return (
    <>
      <Navbar />
      <SideNavbar />
      <Main />
    </>
  );
};

export default App;
