import "./index.css";
import AboutUs from "./pages/mainpage/aboutUs/aboutUs";
import Article from "./pages/mainpage/article/article";
import BaseStory from "./pages/mainpage/baseStory/baseStory";
import BeutiText from "./pages/mainpage/beutiText/beutiText";
import Footer from "./pages/mainpage/footer/footer";
import Header from "./pages/mainpage/header/Header";
import HeaderTop from "./pages/mainpage/headerTop/headerTop";
import Navbar from "./pages/mainpage/navbar/Navbar";
import Partner from "./pages/mainpage/partner/partner";
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
      <Article />
      <Partner />
      <Footer />
    </>
  );
};

export default App;
