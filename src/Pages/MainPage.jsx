import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const baseURL = "https://fakestoreapi.com/";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])

  // Get Product
  useEffect(() => {
    axios
      .get(baseURL + "products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Get Categories
  useEffect(() => {
    axios
      .get(baseURL + "products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
    // console.log(categories)
  }, []);

  return (
    <div className="flex mainLayout">
      <aside className="bg-gradient-to-r from-[#13547ae8] to-[#2591acec] h-[100vh] flex flex-col items-center ">
        {categories?.map((category) => <h2>{category}</h2>)}
        <p className="text-white font-mono font-semibold">TECH</p>
      </aside>

      <main className="flex gap-20 flex-wrap p-10">

        {products?.slice(0, 8).map((product) => <Card product={product} />)}
      </main>
    </div>
  );
};

export default MainPage;
