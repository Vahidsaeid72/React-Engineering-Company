import "./index.css";
import Header from "./pages/mainpage/header/Header";
import HeaderTop from "./pages/mainpage/headerTop/headerTop";
import Navbar from "./pages/mainpage/navbar/Navbar";
import Specifications from "./pages/mainpage/Specifications/Specifications";

const App = () => {
  return (
    <>
      <HeaderTop />
      <Specifications />
      <Header />
      <Navbar />
    </>
  );
};

export default App;
