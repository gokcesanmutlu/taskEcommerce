import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link, useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtred, setFiltred] = useState(null);
  const [params, setParams] = useSearchParams();
  let query = params.get("q");
  const category = params.get("category");

  // Get Categories
  useEffect(() => {
    axios
      .get(`products/categories/`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Get All Products or Get Products That Have Selected Category
  useEffect(() => {
    axios
      .get(category ? `products/category/${category}` : "products")
      .then((res) => {
        setProducts(res.data);
        setFiltred(res.data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  // Filtering in accordance with input's value
  useEffect(() => {
    const q = query?.toLowerCase() || "";
    setFiltred(products?.filter((i) => i.title.toLowerCase().includes(q)));
  }, [query]);

  return (
    <div className="flex mainLayout">
      <aside className="min-h-[100vh] p-9 bg-gradient-to-r from-[#13547ae8] to-[#2591acec] flex flex-col gap-5 items-left uppercase ">
        <button
          onClick={() => {
            setParams();
            query = null;
          }}
          className="text-white font-mono font-semibold hover:bg-sky-900 p-2 rounded-md text-left"
        >
          ALL
        </button>

        {categories?.slice(0, 8).map((category, key) => (
          <Link
            to={`?category=${category}`}
            key={key}
            className="text-white  max-md:text-[14px] font-mono font-semibold hover:bg-sky-900 p-2 rounded-md"
          >
            {category}
          </Link>
        ))}
      </aside>

      <main className="flex gap-20 flex-wrap p-10 max-md:justify-center">
        {filtred?.slice(0, 12).map((product, key) => (
          <Card product={product} key={key} />
        ))}
        <button
          className={`p-2 font-mono uppercase font-semibold text-gray-800 border-2 border-orange-500 m-auto ${
            category || query ? "hidden" : ""
          }`}
        >
          For More..
        </button>
      </main>
    </div>
  );
};

export default MainPage;
