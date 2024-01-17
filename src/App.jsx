import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./Pages/MainPage";
import Undefined from "./components/Undefined";
import DetailPage from "./Pages/DetailPage";
import About from "./components/About";
import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com/";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Undefined />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
