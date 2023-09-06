import "../component/Home.css";
//import cube from "../Images/cube33d 1.png";
//import logo from "../Images/logo.png";
import Events from '../component/Events';
import NavigationComponent from "./NavBar";
import Logo from "./logo";
import Proshows from "../component/Proshows";
import GALLERY from "./Gallery";
import { Sponsors } from "./Sponsors";
import Footer from "./Footer";
import earth from "../Images/earth.svg";
import CustomCursor from "../component/Cursor";
const HOME = () => {
  return (
    <div className="home">
      
      <NavigationComponent />
      <Logo />
      
      <Proshows />
      <GALLERY />
      <Events />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default HOME;
