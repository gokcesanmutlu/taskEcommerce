import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import MainPage from './Pages/MainPage';
import Undefined from './components/Undefined';
import DetailPage from './Pages/DetailPage';
import About from './components/About';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const baseURL = "https://fakestoreapi.com/";

function App() {
  const [products, setProducts] = useState([]);

  // Get Product
  useEffect(() => {
    axios
      .get(baseURL + "products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header products={products} setproducts={setProducts}/>
        <Routes>
          <Route path="/" element={<MainPage products={products} setProducts={setProducts} baseURL={baseURL}/>} />
          <Route path="/detail/:id" element={<DetailPage  baseURL={baseURL}/>} />

          <Route path="/about" element={<About />} />
          {/* <Route path="product/:id" element={<DetailPage />} /> */}
          <Route path="*" element={<Undefined />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
