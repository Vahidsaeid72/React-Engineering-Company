import "./index.css";
import AboutUs from "./pages/mainpage/aboutUs/aboutUs";
import BaseStory from "./pages/mainpage/baseStory/baseStory";
import BeutiText from "./pages/mainpage/beutiText/beutiText";
import Header from "./pages/mainpage/header/Header";
import HeaderTop from "./pages/mainpage/headerTop/headerTop";
import Navbar from "./pages/mainpage/navbar/Navbar";
import MySlider from "./pages/mainpage/project/mySlider";
import Project from "./pages/mainpage/project/project";
import Specifications from "./pages/mainpage/Specifications/Specifications";
import TabMenu from "./pages/mainpage/tabMenu/tabMenu";

const App = () => {
  return (
    <>
      <HeaderTop />
      <Specifications />
      <Header />
      <Navbar />
      <BaseStory />
      <TabMenu />
      <AboutUs />
      <BeutiText />
      <Project />
      <MySlider />
    </>
  );
};

export default App;
