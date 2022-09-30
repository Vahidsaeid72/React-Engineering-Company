import "./index.css";
import BaseStory from "./pages/mainpage/baseStory/baseStory";
import Header from "./pages/mainpage/header/Header";
import HeaderTop from "./pages/mainpage/headerTop/headerTop";
import Navbar from "./pages/mainpage/navbar/Navbar";
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
    </>
  );
};

export default App;
