import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const MainPage = ({products,setproducts, baseURL}) => { 
  
  const [categories, setCategories] = useState([])
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(1);

  // Get Categories
  useEffect(() => {
    axios
      .get(baseURL + "products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex mainLayout">

      <aside className="p-9 bg-gradient-to-r from-[#13547ae8] to-[#2591acec]  flex flex-col gap-5 items-left uppercase ">
        <>
          {categories?.slice(0, 8).map((category, key) =>
            <h2 key={key} className="text-white font-mono font-semibold hover:bg-sky-900 p-2 rounded-md">{category}</h2>)}
        </>
      </aside>

      <main className="flex gap-20 flex-wrap p-10">
        {products?.slice(0, 12).map((product, key) => <Card product={product} key={key} />)}

        <button >For More..</button>
      </main>

    </div >
  );
};

export default MainPage;
